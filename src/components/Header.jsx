import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
      
      <div className="navbar">
        <ul>
           <li> <Link to='/'>Home</Link> </li> 
          <li><Link to='/new'>All Cateogry</Link> </li>
          <li><Link to='/new'>Promotion</Link> </li>
          <li><Link to='/new'>New Releases</Link> </li>
        <li class="shopping-cart"><img src="shop.png" width="50" height="50"></img> </li>
        <li><Link to='/new'>Add New Product</Link> </li>
        </ul>
        



        </div>

        
    );
}

export default Header;
