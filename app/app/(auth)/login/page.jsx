"use client";
import { InputField } from "@/components/fields/InputField";
import Logo from "@/components/logo/Logo";
import theme from "@/context/theme";
import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

const LoginPage = () => {
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
        } else if (loginData.error === "User not verified") {
          errorMessage = "Please verify your email before logging in";
        }
        toast.error(errorMessage, {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.success("Login Successful", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        resetForm();
        handleNavigate();
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} py={12} px={6}>
        <Stack align={"center"}>
          <Logo color={theme.colors.primary[500]} />
          <Heading fontSize={"2xl"}>Login</Heading>
          <Box color="fg.muted">
            Don&apos;t have an account?{" "}
            <Link href="/register" color={theme.colors.primary[400]}>
              Sign up
            </Link>
          </Box>
        </Stack>

        <Stack
          direction="column"
          spacing={4}
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          maxW="8xl"
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
            bg={theme.colors.primary[400]}
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

export default LoginPage;
