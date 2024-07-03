"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import theme from "@/context/theme";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Toaster
        position="bottom-center"
        duration={4000}
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      />
      <SessionProvider>
        <Provider store={store}>{children}</Provider>
      </SessionProvider>
    </ChakraProvider>
  );
}
