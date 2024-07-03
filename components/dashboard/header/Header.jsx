"use client";
import theme from "@/context/theme";
import { Box, IconButton, Stack, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import ProfileCard from "../profile-card/ProfileCard";
import Logo from "@/components/logo/Logo";

const DashboardHeader = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      // bg="gray.100"
      bg={theme.colors.secondary[500]}
      px={8}
      py={2}
    >
      <Stack
        direction="row"
        align="center"
        justify={{ base: "space-between", md: "flex-end" }}
      >
        <IconButton
          icon={<MdOutlineMenu />}
          variant="ghost"
          _hover={{
            bg: "transparent",
          }}
          // color={theme.colors.primary[500]}
          color="white"
          display={{ base: "block", md: "none" }}
          // onClick={onOpen}
        />
        <Box display="none">
          <Logo
            color={theme.colors.primary[500]}
            display={{ base: "none", md: "block" }}
            fontSize="md"
          />
        </Box>

        <ProfileCard/>
      </Stack>
    </Box>
  );
};

export default DashboardHeader;
