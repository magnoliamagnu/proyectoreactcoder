import { useContext } from "react";
import {CgShoppingCart} from "react-icons/cg"
import "./CartWidget.css";
import {Link} from "react-router-dom"
import { CartContext } from "../../context/CartContext";



export const CartWidget = () => {

  const{cart} = useContext(CartContext)

  return (
    <Link to="/cart"> 
    <div className="cart__widget">
      <div className="cart__icon">
      <CgShoppingCart size={"1.5rem"}/> 
      </div>
      <span>{cart.length}</span>
    </div>
    </Link>
  )
}