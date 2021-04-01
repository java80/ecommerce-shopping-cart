import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import Product from "./Product";
import Search from "./Search";
import "./Product.css";


function ProductList(props) {
  let [products, setProducts] = useState([]);
  //let [currentProduct, setCurrentProduct] = useState({});
  let [searchTerm, setSearchTerm] = useState("");
  let [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    getProduct();
  }, [props.toggle]);


  useEffect(() => {
    // checking here to see if there are no filtered products and
    // the user has cleared the search bar
    // and products has been populated
    // if all conditions are true then reset filtered products using our original api
    // data from song state
    if (
      
        searchTerm === "" &&
        products.length !== 0
    ) {
        setFilteredProducts(products);
    }
  }, [filteredProducts, searchTerm, products]);
  


  async function getProduct() {
    let response = await axios.get(baseURL, config);
    setProducts(response.data.records);
    //setCurrentProduct(response.data.records);
 
    setFilteredProducts(response.data.records);
  }

  return (
    <div className="search-container ">
      <Search
                    setSearchTerm={setSearchTerm}
                    searchTerm={searchTerm}
                    setProducts={setProducts}
                    products={products}
                    setFilteredProducts={setFilteredProducts}
                />

      <div className= "product-container">
        {filteredProducts.map(product => (<Product currentProduct={product} key={product.id} setToggle={ props.setToggle }/>))}
        {/* <Product currentProduct={currentProduct} /> */}
        {/* <Form products ={products}/> */}
      </div>

    </div>
  )

}

export default ProductList;
