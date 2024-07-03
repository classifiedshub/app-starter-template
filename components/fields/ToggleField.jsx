import React from "react";
import { Switch, FormLabel, Flex, Text, Stack } from "@chakra-ui/react";
import theme from "@/context/theme/theme";

const ToggleField = ({
  name,
  color,
  title,
  isChecked,
  activeTitle,
  inactiveTitle,
  onChange,
}) => {
  return (
    <Stack align="center" direction="row" spacing={4} mt={2}>
      <FormLabel htmlFor="toggle" fontSize="sm">
        {title}
      </FormLabel>
      <Switch
        name={name}
        id="toggle"
        type="checkbox"
        colorScheme="purple"
        isChecked={isChecked}
        onChange={onChange}
      />
      <Text ml="2" fontSize="sm" color={isChecked ? "blue" : "red.500"}>
        {isChecked ? `${activeTitle}` : `${inactiveTitle}`}
      </Text>
    </Stack>
  );
};

export default ToggleField;
