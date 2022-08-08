import "../styles/globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "../utils/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box className="bgBlack">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
