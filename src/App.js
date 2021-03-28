import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/ProductList";
import Form from "./components/Form";
import ProductList from './components/ProductList';

function App() {

  return (
    <div className="App">
      
      <Header />
            <Route exact path='/'>
                <ProductList />
            </Route>
            <Route path='/new'>
                <Form />
            </Route>
            <Footer />
    </div>
  );
}

export default App;
