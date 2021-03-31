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

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <ProductList />
      </Route>
      <Route path="/new">
        <Form />
        <ProductList />
      </Route>
      <Route path="/product/:id">
        <Productdetails />
      </Route>
      <Route path="/edit/:id">
      {/* <Form products={products} /> */}
        
      </Route>
      <Footer />
    </div>
  );
}

export default App;
