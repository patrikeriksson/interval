import "../styles/Menu.css";

function Menu() {
  return (
    <nav className="menu">
      <svg
        className="menu__icon"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
        <li>ANALOG TIMER</li>
        <li>DIGITAL TIMER</li>
      </ul>
    </nav>
  );
}

export default Menu;