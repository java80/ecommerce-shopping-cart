import { useState, useEffect, useContext } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { baseURL, config } from "../services";
import Product from "./Product";
import { AppContext } from "../AppContext";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Search from "./Search";
import "./Product.css";
import Basket from "./Basket/Basket";
import Pagination from "./Pagination";

function ProductList(props) {
  const { JwtToken, adminEmail } = useContext(AppContext);
  let [products, setProducts] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [productPerPage] = useState(3);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  console.log(currentProducts);
  useEffect(() => {
    getProduct();
  }, []);

  let [filteredProducts, setFilteredProducts] = useState(
    products.slice(indexOfFirstProduct, indexOfLastProduct)
  );
  useEffect(() => {
    if (searchTerm === "" && products.length !== 0) {
      setFilteredProducts(
        products.slice(indexOfFirstProduct, indexOfLastProduct)
      );
    }
  }, [currentPage, searchTerm, products,indexOfFirstProduct,indexOfLastProduct]);

  async function getProduct() {
    let response = await axios.get(baseURL, config);
    setProducts(response.data.records);
    setFilteredProducts(response.data.records);
  }
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log("current page", currentPage);
    console.log("pagination click", pageNumber);
  };

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
      <div className="container-fluid">
        <div className="feature-basket center">
          <Card border="info" className="featured-product-card">
            <Card.Header className="cardheader">
              {" "}
              <Card.Title className="text-center">
                Featured Product Image
              </Card.Title>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "0 auto",
                }}
                src="https://sc04.alicdn.com/kf/H615aab5bb469448e82123029ab2665bfA.jpg"
                alt=""
              />
            </Card.Header>
          </Card>

          <Basket />
        </div>
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
      <Pagination
        productPerPage={productPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </>
  );
}

export default ProductList;
