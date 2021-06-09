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
  return (
    <AppContext.Provider
      value={{
        JwtToken,
        adminEmail,
        setJwtToken,
        setAdminEmail,
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
