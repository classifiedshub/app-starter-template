"use client";
import theme from "@/context/theme";
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

const HeroSection = ({ imageUrl, headline, subheadline, cta }) => {
  return (
    <Stack
      position="relative"
      bgImage={`url(${imageUrl})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      color="white"
    >
      <Flex
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.6)" // Adjust the opacity as needed
        zIndex="1"
      />

      <Container maxW={"5xl"} position="relative" zIndex="2">
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 6 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", lg: "4xl" }}
            lineHeight={"110%"}
          >
            {headline}
          </Heading>
          <Text color={"gray.300"} maxW={"3xl"}>
            {subheadline}
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Link href="/pricing">
              <Button
                rounded={"full"}
                px={6}
                _hover={{ bg: theme.colors.secondary[500] }}
                variant="solid"
                bg={theme.colors.primary[500]}
                color="white"
              >
                {cta}
              </Button>
            </Link>
            <Button rounded={"full"} px={6}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default HeroSection;
