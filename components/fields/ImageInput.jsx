import {
  Box,
  Button,
  Card,
  Center,
  FormControl,
  FormLabel,
  Image,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { MdEdit } from "react-icons/md";
import { UploadButton } from "@/utils/uploads/uploadthing";
import theme from "@/context/theme/theme";

const ImageInput = ({ title, imageUrl, imageLabel, setImageUrl, endpoint }) => {
  const toast = useToast();
  return (
    <>
      <Stack direction="column" spacing={2}>
        <FormControl>
          <FormLabel fontSize="sm">{title}</FormLabel>
        </FormControl>
        <Card borderWidth={2} borderStyle="dotted" p={4}>
          {imageUrl && (
            <Button
              leftIcon={<MdEdit />}
              variant="solid"
              size="sm"
              bg={theme.colors.primary[500]}
              color="white"
              onClick={() => setImageUrl("")}
            >
              Change Image
            </Button>
          )}

          <Box>
            {imageUrl ? (
              <Center mt={4}>
                <Image
                  src={imageUrl}
                  alt={imageLabel}
                  boxSize={40}
                  objectFit="contain"
                />
              </Center>
            ) : (
              <UploadButton
                endpoint={endpoint}
                onClientUploadComplete={(res) => {
                  setImageUrl(res[0].url);
                  console.log("Files: ", res);
                  toast({
                    title: "Upload Successful",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                }}
                onUploadError={(error) => {
                  toast({
                    title: `ERROR! ${error.message}`,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  });
                }}
              />
            )}
          </Box>
        </Card>
      </Stack>
    </>
  );
};

export default ImageInput;
