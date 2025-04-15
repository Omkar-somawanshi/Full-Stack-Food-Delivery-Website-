import React, { useContext } from "react";
import "./Cart.css";
import { food_list } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id} className="cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p className="remove" onClick={() => removeFromCart(item._id)}>
                  x
                </p>
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div></div>
        </div>
      </div>
      <div className="cart-total-details">
        <p>Subtotal</p>
        <p>{0}</p>
      </div>
      <div className="cart-total-details">
        <p>Delivery Fee</p>
        <p>{2}</p>
      </div>
      <div className="cart-total-details">
        <b>Total</b>
      </div>
    </div>
  );
};

export default Cart;
