"use client";

import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";

const TextareaField = ({
  title,
  type,
  name,
  value,
  onChange,
  readOnly = false,
  maxLength,
  required = false,
}) => {
  return (
    <>
      <FormControl isRequired={required}>
        <FormLabel fontSize="sm">{title}</FormLabel>
        <Textarea
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          size="sm"
          borderRadius={8}
          boxShadow="md"
          readOnly={readOnly}
          maxLength={maxLength}
        />
      </FormControl>
    </>
  );
};

export default TextareaField;
