import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { TimerProvider } from "./context/TimerContext";
import router from "./router/router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimerProvider>
      <RouterProvider router={router} />
    </TimerProvider>
  </StrictMode>
);

// TODO
// meny overlay
// meny navigation

// animationer
// styling

// vissa buttons kanske borde vara a taggar
