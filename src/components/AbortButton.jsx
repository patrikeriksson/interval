import "../styles/AbortButton.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TimerContext from "../context/TimerContext";

function AbortButton() {
  const { timer } = useContext(TimerContext);
  const navigate = useNavigate();

  const handleAbort = () => {
    timer.stop();
    navigate("/set-timer");
  };

  return (
    <button className="abort-button" onClick={handleAbort}>
      ABORT TIMER
    </button>
  );
}

export default AbortButton;
