import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Menu.css";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuVariants = {
    hidden: {
      x: "-100%",
      transition: {
        ease: "easeInOut",
      },
    },
    visible: {
      x: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const listVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <header className="navbar">
      <svg
        className="navbar__icon"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={toggleMenu}
      >
        <rect
          x="32"
          width="12"
          height="32"
          transform="rotate(90 32 0)"
          fill="#222222"
        />
        <rect
          x="32"
          y="14"
          width="8"
          height="32"
          transform="rotate(90 32 14)"
          fill="#222222"
        />
        <rect
          x="32"
          y="24"
          width="4"
          height="32"
          transform="rotate(90 32 24)"
          fill="#222222"
        />
        <rect
          x="32"
          y="30"
          width="2"
          height="32"
          transform="rotate(90 32 30)"
          fill="#222222"
        />
      </svg>

      <h1 className="logo">interval</h1>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <svg
              className="menu__icon"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleMenu}
            >
              <rect
                x="32"
                width="12"
                height="32"
                transform="rotate(90 32 0)"
                fill="#FFFFFF"
              />
              <rect
                x="32"
                y="14"
                width="8"
                height="32"
                transform="rotate(90 32 14)"
                fill="#FFFFFF"
              />
              <rect
                x="32"
                y="24"
                width="4"
                height="32"
                transform="rotate(90 32 24)"
                fill="#FFFFFF"
              />
              <rect
                x="32"
                y="30"
                width="2"
                height="32"
                transform="rotate(90 32 30)"
                fill="#FFFFFF"
              />
            </svg>
            <motion.ul
              className="menu__list"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={itemVariants}>
                <NavLink to="/analog-timer" onClick={toggleMenu}>
                  ANALOG TIMER
                </NavLink>
              </motion.li>
              <motion.li variants={itemVariants}>
                <NavLink to="/digital-timer" onClick={toggleMenu}>
                  DIGITAL TIMER
                </NavLink>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
