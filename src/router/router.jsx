import { createBrowserRouter } from "react-router-dom";
import SetTimer from "../pages/SetTimer";
import Alarm from "../pages/Alarm";
import DigitalTimer from "../pages/DigitalTimer";
import Loading from "../pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loading />,
  },
  {
    path: "/set-timer",
    element: <SetTimer />,
  },
  {
    path: "/alarm",
    element: <Alarm />,
  },
  {
    path: "/digital-timer",
    element: <DigitalTimer />,
  },
]);

export default router;
