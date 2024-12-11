import cartLogo from '../../assets/bolsa.webp'; 

 const CartWidget = () => {
  return (
    <div className="cart-widget" style={{ position: 'relative' }}>
        <img src={cartLogo} alt="Carrito" style={{ width: '30px', height: '30px' }} />
        <p>1</p>
    </div>
  )
}
export default CartWidget