
import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    primary: {
      100: "#dad6ea",
      200: "#b4add5",
      300: "#8f84c0",
      400: "#695bab",
      500: "#443296",
      600: "#362878",
      700: "#291e5a",
      800: "#1b143c",
      900: "#0e0a1e",
    },
    secondary: {
      100: "#fee3cc",
      200: "#fdc799",
      300: "#fbab66",
      400: "#fa8f33",
      500: "#f97300",
      600: "#c75c00",
      700: "#954500",
      800: "#642e00",
      900: "#321700",
    },
    gray: {
      100: "#d9e4eb",
      200: "#b3cad7",
      300: "#8dafc2",
      400: "#6795ae",
      500: "#417a9a",
      600: "#34627b",
      700: "#27495c",
      800: "#1a313e",
      900: "#0d181f",
    },
  },

  // FONTS
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Inter', sans-serif",
    logo: "'Montserrat', sans-serif"
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
});

export default theme;
