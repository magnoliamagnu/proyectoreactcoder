import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../itemCount/ItemCount'


const ItemDetail = ({product}) => {

  const {addToCart, getQuantityBiId} = useContext(CartContext)

  const onAdd = (quantity)=>{    
    addToCart({
        ...product,
        quantity: quantity
      })
  }  

 const quantity = getQuantityBiId(product.id) 
  
  return (
    <div className="cards__products">
        <img className="cards__img" src={product.img} alt="" />
        <h3>{product.name}</h3>
        <p>{product.brand} {product.description}</p>       
        <p>En almacen: {product.stock}</p>
        <p>Categoría: {product.category} </p>
        <b>{product.price}€</b>                 
   
      <ItemCount onAdd={onAdd} stock={product.stock} initial={quantity} />

    </div>
  )
}

export default ItemDetail