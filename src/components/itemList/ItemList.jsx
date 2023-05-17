import React from 'react'
import Item from"../item/Item"



const ItemList = ({items}) => {
  return (

    <div className='items'> {

    items.map( (elements)=>{
      return <Item key={elements.id} elements={elements}/>           
    })}   
  </div>
  )
}

export default ItemList