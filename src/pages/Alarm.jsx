import "../styles/Alarm.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Alarm() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/set-timer");
  };

  return (
    <main className="alarm">
      <svg
        className="alarm__bell"
        width="85"
        height="86"
        viewBox="0 0 85 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.6833 0C22.4528 0 22.2799 0.0572776 22.107 0.114555C17.0934 2.00472 12.5409 4.98315 8.73751 8.7062C4.99175 12.4865 1.99514 17.0115 0.0934421 21.9946C-0.194694 22.7965 0.208696 23.6557 0.957849 23.942C1.707 24.2284 2.62904 23.8275 2.91717 23.0829C4.70361 18.5007 7.41209 14.3194 10.9273 10.8827C14.385 7.38881 18.5917 4.69677 23.2019 2.92116C24.0087 2.63477 24.3545 1.71833 24.0663 0.97372C23.8358 0.400943 23.2595 0 22.6833 0ZM62.2155 0C61.3511 0 60.7172 0.744609 60.7172 1.5465C60.7172 2.17655 61.1206 2.69205 61.6968 2.92116C66.307 4.69677 70.5138 7.38881 73.9714 10.8827C77.4867 14.3767 80.1951 18.5007 81.924 23.0829C82.2121 23.8848 83.0765 24.2857 83.8833 23.9993C84.6901 23.7129 85.0935 22.8538 84.8053 22.0519C84.8053 22.0519 84.8053 22.0519 84.8053 21.9946C82.9036 17.0115 79.907 12.4865 76.1612 8.7062C72.3579 4.92588 67.8053 2.00472 62.7918 0.114555C62.6189 0.0572776 62.446 0 62.2155 0ZM42.4494 11.341C38.8765 11.341 35.8799 14.2621 35.8799 17.8706C35.8799 19.4171 36.4562 20.7918 37.3782 21.9373C27.2934 24.2284 19.8019 33.1637 19.8019 43.8747V61.3443H19.2256C15.768 61.3443 12.9443 64.1509 12.9443 67.5876C12.9443 71.0243 15.768 73.8309 19.2256 73.8309H30.6934V74.1172C30.6934 80.1314 35.6494 85.0573 41.7002 85.0573C47.7511 85.0573 52.707 80.1314 52.707 74.1172V73.8309H65.7307C69.1884 73.8309 72.0121 71.0243 72.0121 67.5876C72.0121 64.1509 69.1307 61.2871 65.6731 61.2871H65.0968V43.8174C65.0968 33.1065 57.6053 24.1712 47.5206 21.8801C48.4426 20.7918 49.0189 19.3598 49.0189 17.8133C49.0189 14.2621 46.0799 11.341 42.4494 11.341ZM26.7172 12.2001C26.5443 12.2001 26.3138 12.2574 26.1409 12.3147C23.0867 13.5748 20.2629 15.465 17.9002 17.8133C15.5375 20.1617 13.6358 22.9683 12.368 26.004C12.0223 26.7487 12.368 27.6651 13.1172 28.0088C13.8663 28.3524 14.7884 28.0088 15.1341 27.2642C15.1341 27.2069 15.1917 27.2069 15.1917 27.1496C16.2867 24.4575 17.9578 21.9946 20.0324 19.9326C22.107 17.8706 24.585 16.2096 27.2934 15.1213C28.1002 14.8349 28.446 13.9185 28.1579 13.1739C27.9273 12.5438 27.3511 12.2001 26.7172 12.2001ZM58.1816 12.2001C57.3172 12.2001 56.6833 12.8875 56.6833 13.7466C56.6833 14.3194 57.029 14.8922 57.6053 15.1213C60.3138 16.2096 62.7918 17.8706 64.8663 19.9326C66.9409 21.9946 68.6121 24.4575 69.707 27.1496C70.0528 27.9515 70.9172 28.2951 71.724 28.0088C72.5307 27.6651 72.8765 26.8059 72.5884 26.004C71.3206 22.9111 69.4189 20.1044 67.0562 17.7561C64.6935 15.4077 61.8697 13.5175 58.7579 12.2574C58.585 12.2574 58.3545 12.2001 58.1816 12.2001ZM42.4494 14.3767C44.4087 14.3767 45.9646 15.9232 45.9646 17.8706C45.9646 19.8181 44.4087 21.3073 42.4494 21.3073C40.4901 21.3073 38.9341 19.7608 38.9341 17.8133C38.9918 15.9232 40.4901 14.3767 42.4494 14.3767ZM42.4494 24.343C53.3409 24.343 62.0426 32.9919 62.0426 43.8174V61.2871H22.8562V43.8174C22.8562 32.9919 31.5579 24.343 42.4494 24.343ZM19.2256 64.3228H21.3002H63.5409H65.6155C67.4019 64.3228 68.8426 65.7547 68.8426 67.5303C68.8426 69.3059 67.4019 70.7379 65.6155 70.7379H19.2256C17.4392 70.7379 15.9985 69.3632 15.9985 67.5303C15.9985 65.6974 17.4392 64.3228 19.2256 64.3228ZM33.7477 73.7736H49.6528V74.06C49.6528 78.4704 46.1375 81.9643 41.7002 81.9643C37.2629 81.9643 33.7477 78.4704 33.7477 74.06V73.7736Z"
          fill="white"
        />
      </svg>
      <h2 className="alarm__heading">Times up!</h2>
      <motion.button
        className="alarm__button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
      >
        SET NEW TIMER
      </motion.button>
    </main>
  );
}
export default Alarm;
