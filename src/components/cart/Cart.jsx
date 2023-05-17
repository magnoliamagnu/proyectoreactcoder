import {useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import NoInfo from "../noInfo/NoInfo"
import Form from "../form/Form"




const Cart = () => {

  const{cart, clearCart, getTotalPrice, } = useContext(CartContext)

  const [buy, setBuy] = useState(false)

  const [orderId, setOrderId] = useState(null)

  const { deleteProductById} = useContext( CartContext)

  const openForm = ()=> {
    if( cart.length >0 ){
      setBuy(true)
    }else{
      alert("No hay productos en el carrito")
    }
    

  }

  if (orderId) {
    return (
      <div>
      <h1>Tu orden de compra es: {orderId}</h1>
    </div>
    )
  }

  return (
    <div>      
      {
        cart.map(item =>(  
          <div key={item.id} style={{ border: '0.1px solid #000000'}}>
            <img className="cards__img" src={item.img} alt="" />
            <h2 >{item.name} </h2>
            <p>{item.brand},
            {item.category},</p>
            <p>{item.description} </p>
            <p> Unidades: <strong>{item.quantity} </strong> </p>  
            <button variant="contained" onClick={()=> deleteProductById(item.id)} >
              Eliminar</button>          
          </div>                     
        ))}

        { cart.length < 1 && <NoInfo /> }
              
        <div>
            <button onClick={()=> clearCart()}>Vaciar carrito</button>
        </div>
        
        <div>
          <h3>Resumen:</h3>
          <p> Total: <strong>{ getTotalPrice() > 0 ? getTotalPrice() : "Añade productos al carrito"} </strong> </p>      
        </div>
                    
       

        {
          buy ? (
          <Form cart={cart} 
          getTotalPrice={getTotalPrice}
          setOrderId={setOrderId}
          clearCart={clearCart}
          /> 
          ) : (
            <button onClick= {openForm}
            style={
              {
                background:"green",
                color:"white",
                padding: "0.5rem",
                border: "none",
                borderRadius: "5px",
                margin: "1rem"
              }}>
                realizar compra</button>
          )
        }

       
    </div>
  )


  
}

export default Cart