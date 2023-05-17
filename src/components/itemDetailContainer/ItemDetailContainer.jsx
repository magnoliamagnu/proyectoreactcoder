import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemDetail from '../itemDetail/ItemDetail'



const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const {id} = useParams()
    
    useEffect( ()=> {
       
        const itemCollection = collection(db, "products")
        const ref = doc(itemCollection, id)

        getDoc(ref)
        .then(res =>{
            setProduct(
                {
                    id: res,id,
                    ...res.data()
                }
            )
        }) 

    }, 
    [id])

  return (                     
      <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer