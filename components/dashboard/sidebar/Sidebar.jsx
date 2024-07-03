"use client";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import theme from "@/context/theme";
import Logo from "@/components/logo/Logo";
import { useState } from "react";
import { useSession } from "next-auth/react";
import NavItem from "./NavItem";
import CollapsibleNavItem from "./CollapsibleNavItem";
import {
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiSettings,
} from "react-icons/fi";
import {
  MdCampaign,
  MdContacts,
  MdDashboard,
  MdDocumentScanner,
  MdGroups,
} from "react-icons/md";
import { HiTemplate } from "react-icons/hi";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { data: session, status } = useSession();
  const role = session?.user?.role;
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // MENU ITEMS
  let menuItems = [];
  if (role === "USER") {
    menuItems = [
      { label: "Dashboard", icon: MdDashboard, path: "/" },
      { label: "Segments", icon: MdGroups, path: "/segments" },
      { label: "Contacts", icon: MdContacts, path: "/contacts" },
      { label: "Templates", icon: HiTemplate, path: "/templates" },
      { label: "Campaigns", icon: MdCampaign, path: "/campaigns" },
      { label: "Schedule", icon: FiClock, path: "/schedule" },
      { label: "Reports", icon: MdDocumentScanner, path: "/reports" },
      {
        label: "Settings",
        icon: FiSettings,
        path: "/settings",
        subItems: [
          { label: "Account", path: "/settings/account" },
          { label: "Email", path: "/settings/email" },
          { label: "Notifications", path: "/settings/notifications" },
        ],
      },
    ];
  }

  return (
    <Stack
      display={{ base: "none", md: "block" }}
      bg={theme.colors.primary[500]}
      color="white"
      width={isSidebarOpen ? "250px" : "75px"}
      p={4}
      transition="width 0.2s ease-in-out"
    >
      <Flex align="center" justify="space-between">
        <Box
          display={isSidebarOpen ? "block" : "none"}
          alignItems="center"
          justifyItems="center"
        >
          <Logo
            color="white"
            display={{ base: "none", md: "block" }}
            fontSize={{ base: "lg", md: "lg" }}
          />
        </Box>
        <IconButton
          color="white"
          icon={isSidebarOpen ? <FiChevronLeft /> : <FiChevronRight />}
          variant="ghost"
          size="sm"
          onClick={handleToggleSidebar}
        />
      </Flex>

      {/* MENU LIST  */}
      {/* MENU ITEMS */}
      <VStack spacing={1} align="stretch" mt={4}>
        {menuItems.map((item, i) => {
          if (item.subItems) {
            return (
              <CollapsibleNavItem
                key={i}
                label={item.label}
                path={item.path}
                icon={item.icon}
                isSidebarOpen={isSidebarOpen}
                subItems={item.subItems}
              />
            );
          } else {
            return (
              <NavItem
                key={i}
                label={item.label}
                path={item.path}
                icon={item.icon}
                isSidebarOpen={isSidebarOpen}
              />
            );
          }
        })}
      </VStack>
    </Stack>
  );
};

export default Sidebar;
