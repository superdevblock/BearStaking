import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "@fontsource/inter";
import Home from "./views/Home"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
