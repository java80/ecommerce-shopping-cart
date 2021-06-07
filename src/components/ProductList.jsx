import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import Product from "./Product";
import { AppContext } from "../AppContext";
import Card from "react-bootstrap/Card";

import Search from "./Search";
import "./Product.css";

function ProductList(props) {
  const { JwtToken, adminEmail } = useContext(AppContext);
  let [products, setProducts] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");
  let [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    getProduct();
  }, [props.toggle]);

  useEffect(() => {
    if (searchTerm === "" && products.length !== 0) {
      setFilteredProducts(products);
    }
  }, [filteredProducts, searchTerm, products]);

  async function getProduct() {
    let response = await axios.get(baseURL, config);
    setProducts(response.data.records);
    setFilteredProducts(response.data.records);
  }

  return (
    <>
      <div className="search-container ">
        <Search
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          setProducts={setProducts}
          products={products}
          setFilteredProducts={setFilteredProducts}
        />
      </div>
      {JwtToken && adminEmail === "ikeekedede@gmail.com" && (
        <div className="h3 text-white btn-success p-2 rounded-sm">
          You've logged in as an admin{" "}
        </div>
      )}

      <Card
        border="info"
        style={{
          width: "26rem",
          height: "23rem",
          margin: "0 auto",
          marginBottom: "26px",
        }}
      >
        <Card.Header>
          {" "}
          <Card.Title>Featured Product Image</Card.Title>
          <img
            style={{
              width: "30rem",
              height: "20rem",
              paddingRight: "68px",
              marginLeft: "-19px",
            }}
            src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNob3BwaW5nJTIwY2FydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </Card.Header>
      </Card>

      <div className="products-container">
        {filteredProducts.map((product) => (
          <Product
            currentProduct={product}
            key={product.id}
            setToggle={props.setToggle}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;
