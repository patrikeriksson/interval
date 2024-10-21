import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// TODO
// Routes
// vissa buttons kanske borde vara a taggar

// timer hooken
// useContext för timern

// analog vy
// animationer
// styling
