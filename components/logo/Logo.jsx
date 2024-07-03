import { Text } from "@chakra-ui/react";
import React from "react";
import theme from "../../context/theme";
import { appDetails } from "@/constants/app_details";

const Logo = ({ color, display, fontSize }) => {
  return (
    <Text
      fontFamily={theme.fonts.logo}
      fontWeight={700}
      color={color}
      display={display}
      fontSize={fontSize}
    >
      {appDetails.name}
    </Text>
  );
};

export default Logo;
