import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

const DropdownField = ({
  data,
  optionValue,
  title,
  value,
  name,
  onChange,
  placeholder,
  multiple = false,
  readOnly = false,
}) => {
  const selectRef = useRef(null);

  useEffect(() => {
    if (multiple && selectRef.current) {
      const maxHeight = 200;
      const height = Math.min(selectRef.current.scrollHeight, maxHeight);
      selectRef.current.style.height = `${height}px`;
    }
  }, [multiple, data]);

  const handleChange = (e) => {
    if (multiple) {
      const selectedOptions = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      onChange(selectedOptions);
    } else {
      onChange(e.target.value);
    }
  };

  return (
    <FormControl>
      <FormLabel fontWeight={500} fontSize="sm">
        {title}
      </FormLabel>
      <Select
        ref={selectRef}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        size="sm"
        borderRadius={8}
        boxShadow="md"
        name={name}
        multiple={multiple}
        readOnly={readOnly}
      >
        {data.map((item) => (
          <option key={item.id} value={item[optionValue]}>
            {item.name}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default DropdownField;
