import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme.ts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <MantineProvider theme={theme} defaultColorScheme="dark">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MantineProvider>
);
