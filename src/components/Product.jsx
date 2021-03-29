import "./Product.css";

function Product(props) {
  let product = props.currentProduct.fields ? props.currentProduct.fields : {};
  return (
    <div id='product-list'>
      <div>
        <h1>{product.name}</h1>
        <h2>{product.category}</h2>
        <h3>{product.price}</h3>
        <h2>{product.description}</h2>
        <h3> <img src={product.imgurl1} /></h3>
        <h3> <img src={product.imgurl2} /></h3>
        <h3> <img src={product.imgurl3} /></h3>
        

      </div>


    </div>

  )

}

export default Product;
