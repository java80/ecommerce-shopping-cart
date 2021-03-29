function Product(props) {
  let product = props.currentProduct.fields ? props.currentProduct.fields : {};
  return (
    <div id='flex-container'>
      <div>
      <h2>{product.name}</h2>
      <h4>{product.description}</h4>
      <h6>{product.price}</h6>

      </div>
     

      </div>

  )

}

export default Product;
