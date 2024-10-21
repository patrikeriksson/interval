import { createBrowserRouter } from "react-router-dom";
import SetTimer from "../pages/SetTimer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SetTimer />,
  },
]);

export default router;
