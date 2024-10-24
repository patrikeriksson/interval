import { NavLink } from "react-router-dom";
import "../styles/Menu.css";

function Menu({ toggleMenu }) {
  return (
    <nav className="menu">
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
      <ul className="menu__list">
        <li>
          <NavLink to="/analog-timer" onClick={toggleMenu}>
            ANALOG TIMER
          </NavLink>
        </li>
        <li>
          <NavLink to="/digital-timer" onClick={toggleMenu}>
            DIGITAL TIMER
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
