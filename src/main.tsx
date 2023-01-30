import { ChakraProvider } from "@chakra-ui/react";

import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./Styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
