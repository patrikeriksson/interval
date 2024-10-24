import Navbar from "../components/Navbar.jsx";
import AbortButton from "../components/AbortButton";
import "../styles/DigitalTimer.css";
// import useTimer from "easytimer-react-hook";
import TimerContext from "../context/TimerContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DigitalTimer() {
  // const params = new URLSearchParams(location.search);
  // const time = params.get("minutes");
  // const [startValues, setStartValues] = useState({
  //   minutes: time,
  //   hours: 0,
  //   seconds: 0,
  //   days: 0,
  //   secondTenths: 0,
  // });

  // const endValues = {
  //   minutes: 0,
  //   hours: 0,
  //   seconds: 55,
  //   days: 0,
  //   secondTenths: 0,
  // };

  // const [timer, isTargetAchieved] = useTimer({
  //   target: endValues,
  // });

  // console.log(isTargetAchieved);

  // timer.start({
  //   startValues: startValues,
  //   target: endValues,
  //   updateWhenTargetAchieved: true,
  //   countdown: true,
  // });

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

  return (
    <>
      <Navbar />
      <main className="digital">
        <h2 className="digital__timer">
          {timeValues.toString(["minutes", "seconds"])}
        </h2>
        <AbortButton />
      </main>
    </>
  );
}

export default DigitalTimer;
