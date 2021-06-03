import React from "react";
import "./Form.css";
import { useState, useEffect} from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { useHistory, useParams } from "react-router-dom";

function Form(props) {
  const [product, setProduct] = useState({
    name: "", category: "", quantity: "",
    price: "", imgurl1: "", imgurl2: "", imgurl3: "",
    description: ""



  })
  const history = useHistory()
  
  const params = useParams();
  useEffect(() => {
    if (params.id) {  
        getProductInfo()
        }
  });
  
  async function getProductInfo() {
    
    const ProductUrl = `${baseURL}/${params.id}`;
    let response = await axios.get(ProductUrl, config);
    setProduct(response.data.fields)

  }
  function handleChange(event) {
    let { value, id } = event.target;
    setProduct((prevState) => {
      return { ...prevState, [id]: value };
    })
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (params.id) {
      
      const updateUrl = `${baseURL}/${params.id}`;
      await axios.put(updateUrl, { fields: product }, config);
    }
    else
    {
      await axios.post(baseURL, { fields: product }, config);
    }
   
    props.setToggle(prevState => !prevState)
    history.push("/")

  }

  

  return (
    
    <div className="table-container">
        <form className="form-group"  onSubmit = {handleSubmit}  autoComplete="off" >
          <label className="td">Name<input type="text" name='name' id="name" value={product.name} onChange={handleChange} /></label>
          <label className="td"> Product name <input type="text" name='name' id="category" value={product.category} onChange={handleChange} /></label>
          <label className="td"> Quantity<input type="text" maxLength="5" size = "5" name='name' id="quantity" value={product.quantity} onChange={handleChange} /></label>
          <label className="td"> Price<input type="text" maxLength="5" size = "5" name='name' id="price" value={product.price} onChange={handleChange} /></label>
          <label className="td"> Image 1<input type="text" name='name' id="imgurl1" value={product.imgurl1} onChange={handleChange} /></label>
          <label className="td"> Image 2<input type="text" name='name' id="imgurl2" value={product.imgurl2} onChange={handleChange} /></label>
          <label className="td"> Image 3<input type="text" name='name' id="imgurl3" value={product.imgurl3} onChange={handleChange} /></label>
          <label className="td"> Description<input type="text" name='name' id="description" value={product.description} onChange={handleChange} /></label>
          <button className= "btn btn-primary" type="submit" >Add </button>
         
        </form>
    </div>

  )

}

export default Form;
