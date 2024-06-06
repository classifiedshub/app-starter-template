import { Text } from "@chakra-ui/react";
import React from "react";

const Logo = ({ color }) => {
  return (
    <Text fontFamily="'Monserrat', sans-serif" fontWeight={700} color={color}>
      Logo
    </Text>
  );
};

export default Logo;
