import React from 'react'
import './styles/ItemDetail.css'

const ItemDetail = ({ product}) => {
  return (
    <div className="ItemDetail" style={{ display: "flex"}}>
        <img src={product.image} alt="" width={800}></img>
        <h2>{product.name}</h2>
        <p>{product.category}</p>
        <p>${product.price}</p>
        <p>{product.size}</p>
        <p>{product.colour}</p>
        <p>{product.description}</p>
    </div>  
    )
}

export default ItemDetail