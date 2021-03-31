import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/ProductList";
import Form from "./components/Form";
import ProductList from "./components/ProductList";
import Productdetails from "./components/Productdetails";
import ProductBackEndList from "./components/ProductBackEndList";
import { Button } from 'react-bootstrap';
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <container>
    <div className="App">
      <Header />
      <Route exact path="/">
        <ProductList toggle = {toggle} setToggle = {setToggle} />
      </Route>
      <Route path="/new">
        <Form toggle = {toggle} setToggle = {setToggle} />
        <ProductList toggle = {toggle} setToggle = {setToggle}/>
      </Route>
      <Route path="/product/:id">
        <Productdetails />
      </Route>
      <Route path="/edit/:id">
      <Form  toggle = {toggle} setToggle = {setToggle}/>
        
      </Route>
      <Footer />
      </div>
      </container>
  );
}

export default App;
