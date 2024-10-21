import Navbar from "../components/Navbar.jsx";
import "../styles/SetTimer.css";
import { useState } from "react";

function SetTimer() {
  const [minutes, setMinutes] = useState(10);

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

  return (
    <>
      <Navbar />
      <main className="timer">
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
        <p>minutes</p>

        <button className="timer__start-button">START TIMER</button>
      </main>
    </>
  );
}

export default SetTimer;