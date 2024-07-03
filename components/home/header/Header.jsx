import Logo from "@/components/logo/Logo";
import theme from "@/context/theme";
import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const HomeHeader = () => {
  const loginUrl = `http://app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/login`;
  const registerUserUrl = `http://app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/register`;

  return (
    <Box bg={theme.colors.primary[500]} p={2}>
      <Stack direction="row" align="center" justify="space-between" mx={4}>
        <Logo color="white" />
        <HStack align="center" spacing={6}>
          <Link href={loginUrl}>
            <Button
              bg={theme.colors.secondary[400]}
              color="white"
              size="sm"
              _hover={{
                bg: theme.colors.secondary[600],
              }}
            >
              Login
            </Button>
          </Link>
          <Link href={registerUserUrl}>
            <Button
              bg={theme.colors.secondary[500]}
              color="white"
              size="sm"
              _hover={{
                bg: theme.colors.secondary[600],
              }}
            >
              Register
            </Button>
          </Link>
        </HStack>
      </Stack>
    </Box>
  );
};

export default HomeHeader;
