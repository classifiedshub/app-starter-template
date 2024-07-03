import React, { useState } from "react";
import {
  Box,
  Input,
  Tag,
  TagLabel,
  TagCloseButton,
  Flex,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import theme from "@/context/theme/theme";

const TagsInput = ({ tags, setTags, name, onTagsChange }) => {
  const [tagInput, setTagInput] = useState("");

  const handleTagInputChange = (event) => {
    setTagInput(event.target.value);
  };

  const handleAddTag = () => {
    if (tagInput.trim() !== "") {
      const newTag = tagInput.trim();
      setTags([...tags, newTag]);
      setTagInput("");
      onTagsChange([...tags, newTag]);
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
    onTagsChange(updatedTags);
  };

  return (
    <Box>
      <HStack align="center" spacing={2}>
        <Input
          type="text"
          placeholder="Enter tag..."
          value={tagInput}
          onChange={handleTagInputChange}
          size="sm"
          borderRadius={8}
          boxShadow="md"
          mr={2}
          name={name}
        />
        <Button  bg={theme.colors.primary[500]} color="white" size="sm" onClick={handleAddTag} p={2}>
          Add Tag
        </Button>
      </HStack>
      <Flex flexWrap="wrap" mt={2}>
        {tags.length > 0 ? (
          tags.map((tag, index) => (
            <Tag
              key={index}
              size="md"
              borderRadius="full"
              variant="solid"
              bg={theme.colors.primary[500]} color="white"
              mr={2}
              mb={2}
            >
              <TagLabel>{tag}</TagLabel>
              <TagCloseButton onClick={() => handleRemoveTag(tag)} />
            </Tag>
          ))
        ) : (
          <Text fontSize="sm">No tags available</Text>
        )}
      </Flex>
    </Box>
  );
};

export default TagsInput;
