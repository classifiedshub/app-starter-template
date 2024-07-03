"use client";
import Logo from "@/components/logo/Logo";
import theme from "@/context/theme";
import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  HStack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { InputField } from "../fields/InputField";

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const handleNavigate = () => {
    router.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
    };
    console.log(data);
  
    try {
      setLoading(true);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      if (loginData?.error) {
        setLoading(false);
        let errorMessage = "Something went wrong";
        if (loginData.error === "No user found") {
          errorMessage = "No user found with this email";
        } else if (loginData.error === "Invalid credentials") {
          errorMessage = "Invalid email or password";
        }
        // else if (loginData.error === "User not verified") {
        //   errorMessage = "Please verify your email before logging in";
        // }
        toast.error(errorMessage);
      } else {
        toast.success("Login successful");
        resetForm();
        handleNavigate();
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue(theme.colors.gray[100], theme.colors.gray[800])}
      fontSize="sm"
    >
      <Stack spacing={8} mx={"auto"} py={12} px={6}>
        <Stack align={"center"}>
          <Logo color={theme.colors.primary[500]} fontSize="lg" />
          <Heading fontSize={"2xl"}>Login</Heading>
          <HStack fontSize="sm" align="center" spacing="1">
            <Text>Don&apos;t have an account?</Text>
            <Link href="/register">
              <Text color={theme.colors.primary[400]} fontWeight={600}>
                Sign up
              </Text>
            </Link>
          </HStack>
        </Stack>

        <Stack
          direction="column"
          spacing={4}
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          minW={400}
          mt={2}
          as="form"
          onSubmit={handleSubmit}
        >
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
            type="submit"
            isLoading={loading}
            bg={theme.colors.secondary[500]}
            color={"white"}
            _hover={{
              bg: theme.colors.primary[500],
            }}
          >
            Sign in
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default LoginForm;
