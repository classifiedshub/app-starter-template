"use client";
import Logo from "@/components/logo/Logo";
import theme from "@/context/theme";
import { Box, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBox, FaHome } from "react-icons/fa";

const sidebarList = [
  {
    title: "Home",
    link: "/",
    icon: FaHome,
  },
  {
    title: "Products",
    link: "/products",
    icon: FaBox,
  },
];

const DashboardSidebar = () => {
  const pathname = usePathname();
//   const isActive = pathname === path;

  return (
    <Stack direction="column" display={{ base: "none", md: "block" }} p={4}>
      <Logo color={theme.colors.primary[500]} />
      <Box>
        {sidebarList.map((list, i) => (
          <Link key={i} href={list.link}>
            <Box
              p={2}
            //   backgroundColor={isActive ? theme.colors.primary[500] : "none"}
            >
              <HStack spacing={2}>
                <Icon as={list.icon} />
                <Text>{list.title}</Text>
              </HStack>
            </Box>
          </Link>
        ))}
      </Box>
    </Stack>
  );
};

export default DashboardSidebar;
