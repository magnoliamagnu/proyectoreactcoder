import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import CustomLoader from '../customLoader/CustomLoader'
import "../item/Item.css"
import ItemList from '../itemList/ItemList'


const ItemListContainer = ( ) => {
  const {id} = useParams()

  const [items, setItems] = useState([])
  const [customLoader, setCustomLoader] =useState([])
   
  useEffect (()=> {

    const itemCollection = collection( db, "products" )

    if(id){
      const q = query(itemCollection, where("category", "==" ,id))
      getDocs(q)
      .then( (res)=> {
        const products = res.docs.map( product => {
          return{
            
            ...product.data(),
            id: product.id
          }
        })
                
        setItems(products)
      })
      .catch( (err)=> console.log(err))


    }else{
      getDocs(itemCollection)
      .then( (res)=> {
        const products = res.docs.map( product => {
          return{
            
            ...product.data(),
            id: product.id
          }
        })        
        setItems(products)
      })
      .catch( (err)=> console.log(err))

    }

   

    setTimeout ( ()=>{
      setCustomLoader(false)
    },1000)


  }, [id])
      
  return (    
    <div>  
      { items.length > 0 ? <ItemList items={items}/> : <CustomLoader/> }               
    </div>    
  )
}

export default ItemListContainer