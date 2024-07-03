import theme from "@/context/theme";
import { HStack, Text, Button, Icon, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItem = ({ label, path, icon, isSidebarOpen }) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <>
      <Link key={label} href={path}>
        <HStack
          align="center"
          justify="space-between"
          p={1}
          backgroundColor={isActive ? theme.colors.primary[500] : "none"}
          _hover={{
            bg: theme.colors.secondary[500],
            color: "white"
          }}
          color={isActive ? "white" : "none"}
          borderRadius={10}
          fontSize="sm"
          fontWeight={700}
        >
          <Flex align="center" ml={2}>
            <Icon as={icon} alignItems="center" />
            <Text display={isSidebarOpen ? "block" : "none"} ml={2}>
              {label}
            </Text>
          </Flex>
        </HStack>
      </Link>
    </>
  );
};

export default NavItem;
