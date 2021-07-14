import React from "react";
import "./Product.css";
import "./Productdetails.css";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { baseURL, config } from "../services";
import axios from "axios"
import { AppContext } from "../AppContext";
import { Card} from 'react-bootstrap';
import { useContext } from "react";

function Productdetails(props) {
  console.log("Props", props);
  let { onAdd } = useContext(AppContext);
  let { id } = useParams();
  const [product, setProduct] = useState({})
  const [mainImage, setMainImage] = useState("");
  useEffect(() => {
    getProduct();
   // eslint-disable-next-line
  }, [])

  async function getProduct() {
    let response = await axios.get(baseURL + "/" + id, config);
    setProduct(response.data);
    setMainImage(response.data.fields.imgurl1);
  }
  
  const handleOnclickMainImage = (img) => {
    setMainImage(img);

  }
  return product.fields ? (
    <Card>
      <div>
        <div className="product-details">
          <div className="produt-main-image">
            <img
              classname="product-big-image"
              alt={product.fields.name}
              src={mainImage}
            />
          </div>
          <div className="product-name-price">
            <div>
              <h1 className="product-name"> {product.fields.name} </h1>
            </div>
            <div>
              <h1>
                {`$${product.fields.price} `}
                <button
                  className="btn btn-primary"
                  onClick={() => onAdd(product)}
                >
                  Add to Cart
                </button>
              </h1>
            </div>

            <div>
              <h3 className="product-description">
                {product.fields.description}
              </h3>
            </div>
            <div>
              <h1 className="product-category-text">
                {" "}
                Category: {product.fields.category}{" "}
              </h1>
            </div>
          </div>
        </div>

        <div className="hover-image">
          <div className="product-small-images">
            <img
              alt={product.fields.name}
              src={product.fields.imgurl1}
              onClick={() => handleOnclickMainImage(product.fields.imgurl1)}
            />
          </div>
          <div className="product-small-images">
            <img
              alt={product.fields.name}
              src={product.fields.imgurl2}
              onClick={() => handleOnclickMainImage(product.fields.imgurl2)}
            />
          </div>
          <div className="product-small-images">
            <img
              alt={product.fields.name}
              src={product.fields.imgurl3}
              onClick={() => handleOnclickMainImage(product.fields.imgurl3)}
            />
          </div>
        </div>
      </div>
    </Card>
  ) : null;
}

export default Productdetails;