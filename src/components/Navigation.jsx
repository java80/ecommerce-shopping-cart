import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { i } from "react-bootstrap";
import "./Navigation.css";
import { AppContext } from "../AppContext";

function Navigation() {
  const { JwtToken, adminEmail } = useContext(AppContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <ul className="list-nav">
        <li>
          <Link to="/" className="nav-item nav-link active">
            Home
          </Link>{" "}
        </li>
        <li>
          <Link to="/new" className="nav-item nav-link">
            Category
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-item nav-link">
            Promotion
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-item nav-link">
            New Releases
          </Link>
        </li>

        {JwtToken && adminEmail === "ikeekedede@gmail.com" && (
          <li>
            <Link to="/new" className="nav-item nav-link">
              Add
            </Link>
          </li>
        )}
        <li>
          <Link to="/Login" className="nav-item nav-link">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="nav-item nav-link">
            Signup
          </Link>
        </li>
        <li className="shopping-cart">
          <img src="shop.png" alt="shoppingcart" width="50" height="50"></img>{" "}
          
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
