import { useContext } from "react"
import { CartContext } from "../../Context/CartContext" 
import { Link } from "react-router-dom"
import { BsFillTrash3Fill } from "react-icons/bs"
import "./cart.css"

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

  if( cart.length === 0 ){
    return(
      <div className="empty-cart">
        <h2 className="title-empty-cart">UPSSS.. EL CARRITO ESTA VACIO 😥</h2>
        <Link to="/" className="button-home-empty-cart" >VOLVER AL INICIO</Link>
      </div>
    )
  }

  return (
    <div className="cart" >
      <h1 className="title-cart">PRODUCTOS EN EL CARRITO</h1>
      {
        cart.map( (productCart) => (
          <div className="item-cart" key={productCart.id}>
            <img className="img-item-cart" src={productCart.image} width={100} alt="" />
            <p className="text-item-cart">{productCart.name}</p>
            <p className="text-item-cart">PRECIO: ${productCart.price}</p>
            <p className="text-item-cart">CANTIDAD: {productCart.quantity}</p>
            <p className="text-item-cart">SUBTOTAL: ${ productCart.price * productCart.quantity } </p>
            <button className="delete-item-cart" onClick={ () => deleteProductById(productCart.id) } >
              <BsFillTrash3Fill />
            </button>
          </div>
        ))
      }

      <div className="info-cart">
        <p className="text-info-cart">Precio total: ${totalPrice()}</p>
        <Link className="button-to-cart" to="/checkout" >CONTINUAR LA COMPRA</Link>
        <button className="button-delete-cart" onClick={deleteCart} >VACIAR CARRITO</button>
      </div>
    </div>
  )
}
export default Cart