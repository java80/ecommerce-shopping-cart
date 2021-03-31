import React from "react";
import { Link } from "react-router-dom";
import { Container} from 'react-bootstrap';


function Navigation() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
        <ul>
           <li> <Link to='/' class="nav-item nav-link active">Home</Link> </li> 
          <li><Link to='/new' className="nav-item nav-link">All Cateogry</Link> </li>
          <li><Link to='/new' className= "nav-item nav-link">Promotion</Link> </li>
          <li><Link to='/new' className ="nav-item nav-link" >New Releases</Link> </li>
        <li className="shopping-cart"><img src="shop.png" width="50" height="50"></img> </li>
        <li><Link to='/new' className="nav-item nav-link">Add </Link> </li>
        
            
        </ul>
        </nav>
  );
}

export default Navigation;
