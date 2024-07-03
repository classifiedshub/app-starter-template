"use client";
import {
  Box,
  Stack,
  SimpleGrid,
  Text,
  Icon,
  Input,
  IconButton,
} from "@chakra-ui/react";
import theme from "@/context/theme";
import {
  COMPANY_NAME,
  COMPANY_LINKS,
  LEGAL_LINKS,
  SUPPORT_LINKS,
  SOCIAL_MEDIA_LINKS,
} from "./links";
import { IoMdSend } from "react-icons/io";
import Link from "next/link";
// import Newsletter from "../newsletter/Newsletter";

const HomeFooter = () => {
  const year = new Date().getFullYear();
  return (
    <Box bg={theme.colors.primary[500]} color="white" fontSize="sm">
      <Stack>
        <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={8} p={8}>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize="md" mb={2}>
              Company
            </Text>
            {COMPANY_LINKS.map((links) => (
              <Link href={links.link} key={links.title}>
                <Text fontSize="sm">{links.title}</Text>
              </Link>
            ))}
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize="md" mb={2}>
              Legal
            </Text>
            {LEGAL_LINKS.map((links) => (
              <Link href={links.link} key={links.title}>
                <Text fontSize="sm">{links.title}</Text>
              </Link>
            ))}
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize="md" mb={2}>
              Support
            </Text>
            {SUPPORT_LINKS.map((links) => (
              <Link href={links.link} key={links.title}>
                <Text fontSize="sm">{links.title}</Text>
              </Link>
            ))}
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize="md" mb={2}>
              Stay up to date
            </Text>
            {/* <Newsletter /> */}
          </Stack>
        </SimpleGrid>

        <Box borderTopWidth={1} borderStyle={"solid"}>
          <Box
            as={Stack}
            p={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Text fontSize={"sm"}>
              © {year} {COMPANY_NAME.name}. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              {SOCIAL_MEDIA_LINKS.map((icon, index) => (
                <Link href={icon.link} key={index}>
                  <Icon as={icon.icon} boxSize={6} />
                </Link>
              ))}
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default HomeFooter;
