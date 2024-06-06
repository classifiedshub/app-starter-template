"use client";

import theme from "@/context/theme";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Container,
} from "@chakra-ui/react";
import { benefitsSettings } from "@/data/constants";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const BenefitsSection = () => {
  return (
    <Box p={4}>
      <Container maxW={"5xl"}>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
          {benefitsSettings.map((feature, i) => (
            <Feature
              key={i}
              icon={
                <Icon
                  as={feature.icon}
                  w={10}
                  h={10}
                  color={theme.colors.primary[500]}
                />
              }
              title={feature.title}
              text={feature.description}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default BenefitsSection;
