import theme from "@/context/theme";
import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
  } from "@chakra-ui/react";
  
  const InputField = ({
    title,
    type,
    name,
    label,
    value,
    onChange,
    readOnly = false,
    required = false,
    defaultValue,
    placeholder,
    maxLength,
  }) => {
    return (
      <FormControl isRequired={required}>
        <FormLabel fontSize="sm">{title}</FormLabel>
        <Input
          type={type}
          name={name}
          label={label}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          borderRadius={8}
          size="sm"
          boxShadow="md"
          readOnly={readOnly}
          defaultValue={defaultValue}
          maxLength={maxLength}
          focusBorderColor={theme.colors.primary[500]}
        />
      </FormControl>
    );
  };
  
  const LeftElementInputField = ({
    title,
    dropdownValue,
    type,
    name,
    value,
    onChange,
  }) => {
    return (
      <>
        <FormControl mr={4}>
          <FormLabel fontSize="sm">{title}</FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon bg="none" borderColor="transparent">
              {dropdownValue}
            </InputLeftAddon>
            <Input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              // size="sm"
              borderRadius={8}
              boxShadow="md"
            />
          </InputGroup>
        </FormControl>
      </>
    );
  };
  
  const RightElementInputField = ({
    title,
    dropdownValue,
    type,
    name,
    value,
    onChange,
  }) => {
    return (
      <>
        <FormControl mr={4}>
          <FormLabel fontSize="sm">{title}</FormLabel>
          <InputGroup size="sm">
            <Input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              // size="sm"
              borderRadius={8}
              boxShadow="md"
            />
            <InputRightAddon bg="none" borderColor="transparent">
              {dropdownValue}
            </InputRightAddon>
          </InputGroup>
        </FormControl>
      </>
    );
  };
  
  export { InputField, LeftElementInputField, RightElementInputField };
  