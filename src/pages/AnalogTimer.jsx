import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; //
import Navbar from "../components/Navbar.jsx";
import AbortButton from "../components/AbortButton";
import TimerContext from "../context/TimerContext";
import "../styles/AnalogTimer.css";

function AnalogTimer() {
  const { timer } = useContext(TimerContext);
  const [timeValues, setTimeValues] = useState(timer.getTimeValues());
  const navigate = useNavigate();

  useEffect(() => {
    const updateTime = () => {
      setTimeValues(timer.getTimeValues());
    };

    const handleTargetAchieved = () => {
      navigate("/alarm");
    };

    timer.addEventListener("secondsUpdated", updateTime);
    timer.addEventListener("targetAchieved", handleTargetAchieved);

    return () => {
      timer.removeEventListener("secondsUpdated", updateTime);
      timer.removeEventListener("targetAchieved", handleTargetAchieved);
    };
  }, [timer, navigate]);

  const minuteRotation =
    (60 - timeValues.minutes - timeValues.seconds / 60) * 6;

  return (
    <>
      <Navbar />
      <main className="analog">
        <div className="analog__timer">
          <motion.div
            className="hand"
            style={{ rotate: minuteRotation }}
            animate={{ rotate: minuteRotation }}
            transition={{
              ease: "linear",
            }}
          ></motion.div>

          <div className="center"></div>
        </div>
        <AbortButton />
      </main>
    </>
  );
}

export default AnalogTimer;
