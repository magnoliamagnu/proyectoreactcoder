import "./NavBar.css";
import { CartWidget } from "../cartWidget/CartWidget";
import { Link } from "react-router-dom";


const NavBar = ()=>{
    return (
        <div>
            <header className="navbar__header">
                <div>
                    <Link to="/"><img src="https://images.pexels.com/photos/15519785/pexels-photo-15519785.jpeg?auto=compress&cs=tinysrgb&w=600" alt="logo" /></Link>                    
                </div>
                <ul>
                    <li><Link className="ul__li--link" to="./tienda">Tienda</Link></li>                    
                    <li><Link className="ul__li--link" to="./category/movil">Moviles</Link></li>                    
                    <li><Link className="ul__li--link" to="./category/tablet">Tables</Link></li>
                    <li><Link className="ul__li--link" to="./category/watchs">Relojes</Link></li>
                    <li><Link className="ul__li--link" to="/category/laptop">Portátiles</Link></li>
                </ul>
                
                <CartWidget/>            
            </header>
        </div>
    )
}

export default NavBar;