// THEME ONE
// Lago Blue #20BABD
// Gold Orange #D6760F

// THEME TWO
// Blue Bonnet #231FF0
// Minty Green #10EB81
// Gray #A6A6B3

import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    primary: {
      100: "#d3d2fc",
      200: "#a7a5f9",
      300: "#7b79f6",
      400: "#4f4cf3",
      500: "#231ff0",
      600: "#1c19c0",
      700: "#151390",
      800: "#0e0c60",
      900: "#070630",
    },
    secondary: {
      100: "#cffbe6",
      200: "#9ff7cd",
      300: "#70f3b3",
      400: "#40ef9a",
      500: "#10eb81",
      600: "#0dbc67",
      700: "#0a8d4d",
      800: "#065e34",
      900: "#032f1a",
    },
    gray: {
      100: "#ededf0",
      200: "#dbdbe1",
      300: "#cacad1",
      400: "#b8b8c2",
      500: "#a6a6b3",
      600: "#85858f",
      700: "#64646b",
      800: "#424248",
      900: "#212124",
    },
  },

  // FONTS
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Inter', sans-serif",
    logo: "'Montserrat', sans-serif",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
});

export default theme;
