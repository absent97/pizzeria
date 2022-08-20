import { Link } from "react-router-dom";
import Logo from "../assets/pizzaLogo.png";
import "../styles/navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState } from "react";
export const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleNavbar = () => {
    setShow(!show);
  };

  return (
    <div className="navbar">
      <div id={show ? "open" : "close"} className="leftSide">
        <img src={Logo} alt="navbar" />
        <div className="hiddenLinks">
          <Link to="/pizzeria/">Home</Link>
          <Link to="/pizzeria/menu">Menu</Link>
          <Link to="/pizzeria/about">About</Link>
          <Link to="/pizzeria/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/pizzeria/">Home</Link>
        <Link to="/pizzeria/menu">Menu</Link>
        <Link to="/pizzeria/about">About</Link>
        <Link to="/pizzeria/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};
