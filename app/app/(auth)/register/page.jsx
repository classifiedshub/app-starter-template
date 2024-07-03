import MultiRegistrationForm from "@/components/forms/MultiRegistrationForm";
import RegisterForm from "@/components/forms/RegisterForm";
import { Box } from "@chakra-ui/react";
import React from "react";

const RegisterPage = () => {
  return (
    <Box>
      <RegisterForm />
      {/* <MultiRegistrationForm/> */}
    </Box>
  );
};

export default RegisterPage;
