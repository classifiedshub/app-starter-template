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
import { toast } from "react-toastify";
import { InputField } from "@/components/fields/InputField";
import Logo from "@/components/logo/Logo";
import theme from "@/context/theme";

const RegisterForm = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    // role: role,
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
      // role: "",
    });
  };

  const handleRedirect = () => {
    router.push("/login");
    // if (data.role === "VENDOR") {
    //   router.push(`/verify?userId=${data.id}&email=${data.email}`);
    // } else if (data.role === "USER") {
    //   router.push("/login");
    // }
  };

  // const handleVendorRedirect = (e) => {
  //   e.preventDefault();
  //   window.location.href = "/register?role=vendor";
  // };

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
        toast.success("User created successfully", {
          // Add toast notification
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        resetForm();
        handleRedirect(responseData);
      } else {
        setLoading(false);
        if (response.status === 409) {
          toast.error("User already exists", {
            // Add toast notification
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
          console.error("Server Error:", responseData.message);
        }
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error("Something went wrong", {
        // Add toast notification
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
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Logo color={theme.colors.primary[500]} fontSize="lg" />
          <Heading fontSize={"2xl"}>Sign Up</Heading>
          <Box color="fg.muted">
            Already a user?&nbsp;
            <Link href="/login" color={theme.colors.primary[400]}>
              Login
            </Link>
          </Box>
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
            <Box display="none">
              <InputField
                formTitle="Role"
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                defaultValue={formData.role}
                readOnly={true}
              />
            </Box>
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
              bg={theme.colors.primary[400]}
              color={"white"}
              _hover={{
                bg: theme.colors.primary[500],
              }}
              type="submit"
            >
              Sign up
            </Button>

            {/* {role === "USER" && (
              <Stack
                pt={6}
                align={"center"}
                justify="center"
                direction="row"
                spacing={0.5}
              >
                <Text>Are you a seller?&nbsp;</Text>
                <Text
                  onClick={handleVendorRedirect}
                  color={theme.colors.primary[500]}
                >
                  Sign Up
                </Text>
              </Stack>
            )} */}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default RegisterForm;
