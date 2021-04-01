import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"




function Navigation() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
        <ul>
           <li> <Link to='/' className="nav-item nav-link active">Home</Link> </li> 
          <li><Link to='/new' className="nav-item nav-link">All Category</Link> </li>
          <li><Link to='/new' className= "nav-item nav-link">Promotion</Link> </li>
          <li><Link to='/new' className ="nav-item nav-link" >New Releases</Link> </li>
        <li className="shopping-cart"><img src="shop.png" alt = "shoppingcart" width="50" height="50"></img> </li>
        <li><Link to='/new' className="nav-item nav-link">Add </Link> </li>
        
            
        </ul>
        </nav>
  );
}

export default Navigation;
