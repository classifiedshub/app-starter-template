"use client";
import React from "react";
import {
  Box,
  Card,
  Container,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import theme from "@/context/theme";

const WhyChooseUs = ({ features }) => {
  return (
    <Stack direction="column" bg={useColorModeValue("gray.50", "gray.800")}>
      <Container maxW={"5xl"} my={12}>
        <Heading
          fontSize={"3xl"}
          textAlign="center"
          mb={4}
          color={theme.colors.primary[500]}
        >
          Why Choose Us?
        </Heading>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
          {features.map((feature, index) => (
            <Card key={index} boxShadow="lg" p={6}>
              <Heading size="md" mb={4}>
                {feature.title}
              </Heading>
              <VStack align="start" spacing={3}>
                {feature.description.map((desc, idx) => (
                  <HStack key={idx} spacing={4} align="center">
                    <FaCheck color="green" size={20} />
                    <Text>{desc}</Text>
                  </HStack>
                ))}
              </VStack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Stack>
  );
};

export default WhyChooseUs;
