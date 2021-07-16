import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav} from "react-bootstrap";
import "./Navigation.css";
//import { ReactComponent as Logo } from "./logo.svg";
import CartImage from "../Images-for-javascript/shopping-cart.png"
import { AppContext } from "../AppContext";

function Navigation() {
  const { JwtToken, adminEmail,cartItems,setJwtToken,showBasket, setShowBasket} = useContext(AppContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/" className="nav-item nav-link active">
          AShop
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="" className="nav-item nav-link">
              Category
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="" className="nav-item nav-link">
              Promotion
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="" className="nav-item nav-link">
              New Releases
            </Link>
          </Nav.Link>
          {JwtToken && adminEmail === "ikeekedede@gmail.com" && (
            <>
            <Nav.Link>
              <Link to="/new" className="nav-item nav-link">
                Add Product
              </Link>
            </Nav.Link>
              </>
          )}
        </Nav>
        <Nav>
          <Nav.Link eventKey={2}>
            {JwtToken ? (
              <Link
                to="/Login"
                className="nav-item nav-link"
                onClick={() => setJwtToken("")}
              >
                Logout
              </Link>
            ) : (
              <Link to="/Login" className="nav-item nav-link">
                Login
              </Link>
            )}
          </Nav.Link>
          <Nav.Link eventKey={2}>
            {JwtToken ? (
              <> </>
            ) : (
              <Link to="/signup" className="nav-item nav-link">
                Signup
              </Link>
            )}
          </Nav.Link>
          <Nav.Link eventKey={2}>
            <div className="shopping-cart" onClick ={()=>setShowBasket(!showBasket)}>
              <img
                src= {CartImage}
                alt="shoppingcart"
                width="50"
                height="50"
              ></img>
              <span className="basket-counter">{cartItems.length}</span>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
