import "../styles/Loading.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/set-timer");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <motion.main className="loading">
      <svg
        width="36"
        height="35"
        viewBox="0 0 36 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="35.5"
          y="35"
          width="12"
          height="35"
          transform="rotate(-180 35.5 35)"
          fill="white"
        />
        <rect
          x="20.5"
          y="35"
          width="8"
          height="35"
          transform="rotate(-180 20.5 35)"
          fill="white"
        />
        <rect
          x="9.5"
          y="35"
          width="4"
          height="35"
          transform="rotate(-180 9.5 35)"
          fill="white"
        />
        <rect
          x="2.5"
          y="35"
          width="2"
          height="35"
          transform="rotate(-180 2.5 35)"
          fill="white"
        />
      </svg>
      <h2 className="loading__heading">INTERVAL</h2>
      <p className="loading__subheading">For all your timing needs</p>
    </motion.main>
  );
}

export default Loading;
