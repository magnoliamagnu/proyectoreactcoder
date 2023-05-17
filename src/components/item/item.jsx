import { Link } from "react-router-dom";


const Item = ({elements}) => {
  return (
    <div key={elements.id} className="cards__products">                  
          <img className="cards__img" src={elements.img} alt="" />
          <h3>{elements.name}</h3>          
          <b>{elements.price}€</b>
          <p>IVA incluido</p>          
          <button> <Link className="button__detalles" to={`/ItemDetail/${elements.id}`} > Ver Detalles </Link> </button>                   
    </div>
  );
};

export default Item;