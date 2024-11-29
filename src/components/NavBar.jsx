import CartWidget from './CartWidget'
import './navbar.css'

const NavBar = () => {
  return (
    <nav className='botonera'>
        <div className='logo'>
            <img src="../src/assets/melere.webp"></img>   
        </div>
        <ul className='categorias'>
            <li>Abrigos</li>
            <li>Remeras</li>
            <li>Accesorios</li>
        </ul>
        <CartWidget />
    </nav>
  )
}

export default NavBar