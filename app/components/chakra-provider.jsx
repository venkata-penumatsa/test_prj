"use client"; // ---> this line does the trick

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { extendTheme } from "@chakra-ui/react";
// import theme from "src/ui/theme";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const Providers = ({ children }) => {
  return <ChakraProvider resetCSS>{children}</ChakraProvider>;
};

export default Providers;
