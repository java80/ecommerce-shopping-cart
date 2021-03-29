import "./Form.css";
import Product from "./Product";
import {useParams} from "react-router-dom"
function Form(props) {
  

  return (

    <div className="table-container">
      <div className="table">
        <div className="tr">
          <label className="td">Product Name</label>
          <label className="td">Category</label>
          <label className="td">Qauntity</label>
          <label className="td">Price</label>
          <label className="td">Image 1</label>
          <label className="td">Image 2</label>
          <label className="td">Image 3</label>
          <label className="td">Description</label>
        </div>
        <form className="tr" >
          <label className="td"><input type="text" /></label>
          <label className="td"><input type="text" /></label>
          <label className="td"><input type="text" /></label>
          <label className="td"><input type="text" /></label>
          <label className="td"><input type="text" /></label>
          <label className="td"><input type="text" /></label>
          <label className="td"><input type="text" /></label>
          <label className="td"><input type="text" /></label>
          <button  type="submit" >Submit</button>
        </form>

        

  
      </div>
    </div>










  )

}

export default Form;
