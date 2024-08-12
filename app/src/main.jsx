import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";


import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./Theme/index.js";
import AuthProvider from "./Provider/AuthProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AuthProvider>
  <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </AuthProvider>
  </React.StrictMode>
);
