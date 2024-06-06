import HomeFooter from "@/components/home/footer/Footer";
import HomeHeader from "@/components/home/header/Header";
import { Box } from "@chakra-ui/react";
import React from "react";

const Layout = ({ children }) => {
  return (
    <Box>
      <HomeHeader />
      {children}
      <HomeFooter />
    </Box>
  );
};

export default Layout;
