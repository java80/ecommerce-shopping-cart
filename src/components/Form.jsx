import "./Form.css";
import Product from "./Product";
import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
function Form(props) {
  const [product, setProduct] = useState({
    name: "", category: "", quantity: "",
    price: "", imgurl1: "", imgurl2: "", imgurl3: "",
    description: ""



  })

  function handleChange(event) {
    let { value, id } = event.target;
    setProduct((prevState) => {
      return { ...prevState, [id]: value };
    })
  }
  async function handeSubmit(event) {
    event.preventDefault();
    await axios.post(baseURL, { fields: product }, config);

  }

  

  return (

    <div className="table-container">
      <div className="table">
        <div className="tr">
          <label className="td">Product Name</label>
          <label className="td">Category</label>
          <label className="td">Quantity</label>
          <label className="td">Price</label>
          <label className="td">Image 1</label>
          <label className="td">Image 2</label>
          <label className="td">Image 3</label>
          <label className="td">Description</label>
        </div>
        <form  onSubmit = {handeSubmit} className="tr" >
          <label className="td"><input type="text" name='name' id="name" value={product.name} onChange={handleChange} /></label>
          <label className="td"><input type="text" name='name' id="category" value={product.cateory} onChange={handleChange} /></label>
          <label className="td"><input type="text" name='name' id="quantity" value={product.quantity} onChange={handleChange} /></label>
          <label className="td"><input type="text" name='name' id="price" value={product.price} onChange={handleChange} /></label>
          <label className="td"><input type="text" name='name' id="imgurl1" value={product.imgurl1} onChange={handleChange} /></label>
          <label className="td"><input type="text" name='name' id="imgurl2" value={product.imgurl2} onChange={handleChange} /></label>
          <label className="td"><input type="text" name='name' id="imgurl3" value={product.imgurl3} onChange={handleChange} /></label>
          <label className="td"><input type="text" name='name' id="description" value={product.description} onChange={handleChange} /></label>
          <button type="submit" >Submit</button>
        </form>
      </div>
    </div>










  )

}

export default Form;
