const CartItem = () => {


  return (
    <div className="cart-navbar-row">
      <div className="cart-image-price">
        <img
          src=" https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
          alt=""
          style={{ width: "50px", height: "50px" }}
          className="cart-product-image"
        />
        <p className="cart-unit-name"> cloths</p>
      </div>
      <p className="cart-unit-price"> $5</p>
      <div className="cart-product-quanity">
        <div className="cart-product-increment">+</div>
        <div className="cart-product-counter">0</div>
        <div className="cart-product-decrement">-</div>
      </div>
      <div className="cart-subtotal">300</div>
    </div>
  );

}

export default CartItem