import "../assets/css/navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar () {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        > Home
      </NavLink> |
      <NavLink
        to="/Favoritos"
      > Favoritos
      </NavLink>
    </nav>
  );
}
