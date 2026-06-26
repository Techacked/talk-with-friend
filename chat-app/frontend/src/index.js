import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ChatProvider from "./Context/ChatProvider";
import { BrowserRouter } from "react-router-dom";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      "html, body, #root": {
        minHeight: "100%",
        bg: "#050505",
        color: "#E2E8F0",
      },
      body: {
        bg: "#050505",
        color: "#E2E8F0",
      },
      input: {
        bg: "#0F172A",
        color: "#E2E8F0",
        borderColor: "#334155",
      },
      textarea: {
        bg: "#0F172A",
        color: "#E2E8F0",
        borderColor: "#334155",
      },
      select: {
        bg: "#0F172A",
        color: "#E2E8F0",
        borderColor: "#334155",
      },
      button: {
        color: "#E2E8F0",
      },
      "::-webkit-scrollbar": {
        width: "10px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "rgba(148,163,184,0.35)",
        borderRadius: "999px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "rgba(148,163,184,0.6)",
      },
    },
  },
  colors: {
    brand: {
      50: "#ebf8ff",
      100: "#bee3f8",
      200: "#90cdf4",
      300: "#63b3ed",
      400: "#4299e1",
      500: "#3182ce",
      600: "#2b6cb0",
      700: "#2c5282",
      800: "#2a4365",
      900: "#1A365D",
    },
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <ChatProvider>
        <App />
      </ChatProvider>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
