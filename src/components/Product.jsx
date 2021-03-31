import "./Product.css";
import {Link} from "react-router-dom"
import { baseURL, config } from "../services";
import axios from "axios";

function Product(props) {
  let product = props.currentProduct.fields ? props.currentProduct.fields : {};
 
  async function handleDelete() {
  
    let ProductUrl = `${baseURL}/${props.currentProduct.id}`
    await axios.delete(ProductUrl, config);
    props.setToggle(prevState => !prevState);
}
  return (
     
      <div id='product-list'>
      <img src={product.imgurl1} />
      <Link to={`/product/${props.currentProduct.id}`}> <h1>{product.name}</h1>  </Link>
      <div>
      <Link to={`/edit/${props.currentProduct.id}`}>
                <button className= "btn btn-primary">Edit</button>
        </Link>
        
        
                <button className="btn btn-danger" onClick = {handleDelete}> Delete </button>
            

      </div>
      
      
        {/* <h2>{product.category}</h2>
        <h3>{product.price}</h3>
        <h2>{product.description}</h2>
         
        <img src={product.imgurl2} />
        <img src={product.imgurl3} /> */}
        
      </div>


   

  )

}

export default Product;
