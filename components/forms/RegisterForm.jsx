"use client";
import {
  Flex,
  Box,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/logo/Logo";
import theme from "@/context/theme";
import { InputField } from "../fields/InputField";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  const handleRedirect = () => {
    router.push("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
    };
    // console.log(data);
    try {
      setLoading(true);
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      if (response.ok) {
        console.log(responseData);
        setLoading(false);
        toast.success("User registered successfully");
        resetForm();
        handleRedirect(responseData);
      } else {
        setLoading(false);
        if (response.status === 409) {
          toast.error("User already exists");
        } else {
          console.error("Server Error:", responseData.message);
        }
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
      fontSize="sm"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Logo color={theme.colors.primary[500]} fontSize="lg" />
          <Heading fontSize={"2xl"}>Sign Up</Heading>
          <HStack fontSize="sm" align="center" spacing="1">
            <Text>Don&apos;t have an account?</Text>
            <Link href="/register">
              <Text color={theme.colors.primary[400]} fontWeight={600}>
                Sign up
              </Text>
            </Link>
          </HStack>
        </Stack>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          as="form"
          onSubmit={handleSubmit}
        >
          <Stack spacing={4} direction="column">
            <HStack>
              <InputField
                title="First Name"
                type="text"
                name="firstName"
                label="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required={true}
              />
              <InputField
                title="Last Name"
                type="text"
                name="lastName"
                label="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required={true}
              />
            </HStack>

            <InputField
              title="Email Address"
              type="text"
              name="email"
              label="Email Address"
              value={formData.email}
              onChange={handleChange}
              required={true}
            />

            <InputField
              title="Password"
              type="password"
              name="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              required={true}
            />
            <Button
              isLoading={loading}
              size="lg"
              bg={theme.colors.secondary[500]}
              color={"white"}
              _hover={{
                bg: theme.colors.primary[500],
              }}
              type="submit"
            >
              Sign up
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default RegisterForm;
