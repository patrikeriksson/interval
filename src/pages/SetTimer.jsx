import "../styles/SetTimer.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TimerContext from "../context/TimerContext";
import Navbar from "../components/Navbar.jsx";
import { motion } from "framer-motion";

function SetTimer() {
  const { timer } = useContext(TimerContext);
  const [minutes, setMinutes] = useState(10);
  const navigate = useNavigate();

  const handleDecrement = () => {
    setMinutes((prevMinutes) => Math.max(prevMinutes - 1, 1));
  };

  const handleIncrement = () => {
    setMinutes((prevMinutes) => prevMinutes + 1);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue === "") {
      setMinutes("");
      return;
    }

    const newMinutes = Math.max(1, Number(inputValue));
    setMinutes(newMinutes);
  };

  const handleClick = () => {
    timer.start({ countdown: true, startValues: { minutes } });

    navigate("/analog-timer");
  };

  return (
    <>
      <Navbar />
      <main className="timer">
        <div className="timer__wrapper">
          <div className="timer__container">
            <button className="timer__decrement" onClick={handleDecrement}>
              &lt;
            </button>
            <input
              className="timer__input"
              type="number"
              id="minutes"
              value={minutes}
              onChange={handleInputChange}
              min="0"
              step="1"
            />

            <button className="timer__increment" onClick={handleIncrement}>
              &gt;
            </button>
          </div>
          <p className="timer__text">minutes</p>
        </div>

        <motion.button
          className="timer__start-button"
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          START TIMER
        </motion.button>
      </main>
    </>
  );
}

export default SetTimer;
