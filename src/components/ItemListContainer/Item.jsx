import './styles/Item.css'; 

const Item = ({ product }) => {
  return (
    <div className="Item">
      <img src={product.image} width={100} alt={product.name} />
      <p className="text-item">{product.name}</p>
      <p className="text-item">$ {product.price}</p>
    </div>
  );
}

export default Item;
