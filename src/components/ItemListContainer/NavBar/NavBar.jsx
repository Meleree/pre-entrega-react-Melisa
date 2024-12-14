import CartWidget from '../../CartWidget/CartWidget'
import { NavLink, useNavigate } from "react-router-dom"
import './navbar.css'

const NavBar = () => {

  const navigate = useNavigate()

  return (
    <nav className='botonera'>

        <button className="prev" onClick={ () => navigate(-1) }><img src="../../../src/assets/prev.webp" height="20px"></img></button>
        
        <NavLink to="/" className='logo'>
            <img src="../../../src/assets/melere.webp"></img>   
        </NavLink>
        <ul className='categories'>
            <NavLink to="/category/abrigos" className={ ( { isActive} ) => isActive ? "category-active" : "category" }>ABRIGOS</NavLink>
            <NavLink to="/category/remeras" className={ ( { isActive} ) => isActive ? "category-active" : "category" }>REMERAS</NavLink>
            <NavLink to="/category/accesorios" className={ ( { isActive} ) => isActive ? "category-active" : "category" }>ACCESORIOS</NavLink>
        </ul>
        <CartWidget />
    </nav>
  )
}

export default NavBar