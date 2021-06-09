import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import Product from "./Product";
import { AppContext } from "../AppContext";
import Card from "react-bootstrap/Card";

import Search from "./Search";
import "./Product.css";
import Basket from "./Basket/Basket";

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
      <div className="feature-basket center">
        <Card
          border="info"
          style={{
            width: "30rem",
            height: "26rem",
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
              src="https://sc04.alicdn.com/kf/H615aab5bb469448e82123029ab2665bfA.jpg"
              alt=""
            />
          </Card.Header>
        </Card>
        <Basket />
      </div>
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
