import Navbar from "../components/Navbar";
import AbortButton from "../components/AbortButton";
import "../styles/DigitalTimer.css";

function DigitalTimer() {
  return (
    <>
      <Navbar />
      <main className="digital">
        <h2 className="digital__timer">7:32</h2>
        <AbortButton />
      </main>
    </>
  );
}

export default DigitalTimer;
