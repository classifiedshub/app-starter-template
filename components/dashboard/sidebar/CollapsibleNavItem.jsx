import theme from "@/context/theme";
import {
  HStack,
  Text,
  Icon,
  Flex,
  VStack,
  Collapse,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const CollapsibleNavItem = ({
  label,
  path,
  icon,
  isSidebarOpen,
  subItems = [],
  isMobile = false,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const pathname = usePathname();
  const isActive = pathname === path;

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <HStack
        align="center"
        justify="space-between"
        p={1}
        borderRadius={10}
        onClick={toggleCollapse}
        cursor="pointer"
        fontSize="sm"
        fontWeight={700}
        _hover={{
          bg: theme.colors.secondary[500],
          color: "white"
        }}
      >
        <Flex align="center" ml={2}>
          <Icon as={icon} />
          <Text display={isSidebarOpen ? "block" : "none"} ml={2}>
            {label}
          </Text>
        </Flex>
        {subItems.length > 0 && (
          <Icon
            as={isCollapsed ? FiChevronRight : FiChevronDown}
            display={isSidebarOpen ? "block" : "none"}
          />
        )}
      </HStack>

      {subItems.length > 0 && (
        <Collapse in={!isCollapsed}>
          <VStack align="start" px={4} spacing="none">
            {subItems.map((subItem) => (
              <Link key={subItem.label} href={subItem.path}>
                <HStack
                  align="center"
                  justify="start"
                  // w="100%"
                  p={1}
                  mx={4}
                  backgroundColor={
                    pathname === subItem.path
                      ? theme.colors.primary[500]
                      : "none"
                  }
                  color={pathname === subItem.path ? "white" : "none"}
                  borderRadius={10}
                  fontSize="sm"
                >
                  <Text display={isSidebarOpen ? "block" : "none"}>
                    {subItem.label}
                  </Text>
                </HStack>
              </Link>
            ))}
          </VStack>
        </Collapse>
      )}
    </>
  );
};

export default CollapsibleNavItem;
