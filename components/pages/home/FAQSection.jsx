"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

const FAQSection = ({ faqs }) => {
  return (
    <Stack
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Heading
        as="h2"
        fontWeight={600}
        fontSize={{ base: "2xl", lg: "3xl" }}
        lineHeight={"110%"}
      >
        Common Questions
      </Heading>
      <Container>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          {faqs.map((faq, i) => (
            <AccordionItem key={i}>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
              >
                <Text fontSize="md">{faq.question}</Text>
                <FiChevronDown fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">{faq.answer}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Stack>
  );
};

export default FAQSection;
