
import "./Form.css";
import Product from "./Product";
import { useState, useEffect} from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { useHistory, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

function Form(props) {
  const [product, setProduct] = useState({
    name: "", category: "", quantity: "",
    price: "", imgurl1: "", imgurl2: "", imgurl3: "",
    description: ""



  })
  const history = useHistory()
  
  const params = useParams();
  useEffect(() => {
    if (params.id) {  //check
        getProductInfo()
        }
      
  }, [params.id]);
  
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
      <div className="table">
      <thead class="thead-dark">
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
          </thead>
        <form className="form-group"  onSubmit = {handleSubmit} className="tr" autocomplete="off" >
          <label className="td"><input type="text" name='name' id="name" value={product.name} onChange={handleChange} /></label>
          <label className="td"><input type="text" name='name' id="category" value={product.category} onChange={handleChange} /></label>
          <label className="td"><input type="text" maxlength="5" size = "5" name='name' id="quantity" value={product.quantity} onChange={handleChange} /></label>
          <label className="td"><input type="text" maxlength="5" size = "5" name='name' id="price" value={product.price} onChange={handleChange} /></label>
          <label className="td"><input type="text" name='name' id="imgurl1" value={product.imgurl1} onChange={handleChange} /></label>
          <label className="td"><input type="text" name='name' id="imgurl2" value={product.imgurl2} onChange={handleChange} /></label>
          <label className="td"><input type="text" name='name' id="imgurl3" value={product.imgurl3} onChange={handleChange} /></label>
          <label className="td"><input type="text" name='name' id="description" value={product.description} onChange={handleChange} /></label>
          <button className= "btn btn-primary" type="submit" >Add </button>
         
        </form>
      </div>
    </div>
    









  )

}

export default Form;
