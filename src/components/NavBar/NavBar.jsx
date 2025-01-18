import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import logo from "/src/assets/meleree.webp"; 
import "./navbar.css"

const NavBar = () => {
  return (
    <nav className="navbar">

      <ul className="categories">
        <Link to="/category/abrigos" className="category">ABRIGOS</Link>
        <Link to="/category/remeras" className="category">REMERAS</Link>
        <Link to="/category/accesorios" className="category">ACCESORIOS</Link>
      </ul>

      <Link to="/" className="brand primary-font-color">
        <img src={logo} alt="Logo de Melere" className="logo-brand" />
      </Link>

      <CartWidget />
    </nav>
  )
}

export default NavBar;
