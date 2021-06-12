import { useState } from "react";
import { Route } from "react-router-dom";

import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ProductList from "./components/ProductList";
import Productdetails from "./components/Productdetails";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { AppContext } from "./AppContext";

import "./App.css";
import Basket from "./components/Basket/Basket";

function App() {
  const [toggle, setToggle] = useState(false);
  const [JwtToken, setJwtToken] = useState(undefined);
  const [adminEmail, setAdminEmail] = useState(undefined);
  const [cartItems, setCartItems] = useState([]);
  let [cartItemCounter, setCartItemCounter] = useState(0)
  const onAdd = (product) => {
    const existing = cartItems.find((item) => item.id === product.id)
    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...existing, qty: existing.qty + 1 } : item
          
        )
      )
    }
    else {
      setCartItems([...cartItems, {...product, qty: 1}])
    }
  }

  const onRemove = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing.qty === 1) {
      setCartItems(
        cartItems.filter((item) =>
          item.id !== product.id
        )
      )
    }
    else
    {
      setCartItems(cartItems.map((item) => 
       item.id === product.id ? {...existing, qty: existing.qty -1 } :item
      )
      )
      }

  }
  return (
    <AppContext.Provider
      value={{
        JwtToken,
        adminEmail,
        setJwtToken,
        setAdminEmail,
        cartItems,
        setCartItems,
        cartItemCounter,
        setCartItemCounter,
        onAdd,
        onRemove
      }}
    >
      <div className="container">
        <Navigation />

        <Route exact path="/">
          
          <ProductList toggle={toggle} setToggle={setToggle} />
        </Route>

        <Route path="/new">
          <Form toggle={toggle} setToggle={setToggle} />
          <ProductList toggle={toggle} setToggle={setToggle} />
        </Route>
        
        <Route path="/product/:id">
          <Productdetails />
        </Route>
        <Route path="/edit/:id">
          <Form toggle={toggle} setToggle={setToggle} />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
