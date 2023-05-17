import { addDoc, collection, serverTimestamp, doc, updateDoc  } from 'firebase/firestore'
import { useState} from 'react'
import { db } from '../../firebaseConfig'

const Form = ({cart, getTotalPrice, setOrderId, clearCart}) => {

   
    const[userData, setUserData]= useState({name:"", Mujer:"", email:""})

    const total = getTotalPrice()
  
    const handleSubmit = (event)=>{
        event.preventDefault()        
                
        const order = {
            buyer: userData,
            items: cart,
            total: total,
            date: serverTimestamp()
        }
        
        const orederCollection = collection(db, "orders")

        addDoc(orederCollection, order)
        .then(res => setOrderId(res.id) )
      
        cart.map( product => {
            updateDoc( doc(db, "products", product.id ), {stock: product.stock - product.quantity }) 
        })



        clearCart()

    }

  
    return (
    <form action="" onSubmit={handleSubmit}>
        <input type="text"
        placeholder='Ingrese su nombre' 
        name='name' 
        onChange={(event)=>setUserData({...userData, name: event.target.value})}
        value ={userData.name}
        />
        <input type="text" 
        placeholder='Ingrese su número telefono' 
        name='phone' 
        onChange={(event)=> setUserData({...userData, phone: event.target.value})} 
        value={userData.phone}
         />
         <input type="email" 
        placeholder='Ingrese su email' 
        name='email' 
        onChange={(event)=> setUserData({...userData, email: event.target.value})} 
        value={userData.email}
         />
        <button type='submit'>Comprar</button>
    </form>
  )
}

export default Form