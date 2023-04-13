import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems.reduce((total, next) => total + next.price, 0);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <ul className="list-group">
        {cartItems &&
          cartItems.map((item) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between "
                aria-disabled="true"
              >
                <div className="">
                  <img
                    src={item.image}
                    className="img-thumbnail"
                    alt={item.title}
                    style={{ height: 64, aspectRatio: "1 / 1" }}
                  />
                </div>
                <div className="fw-bold">{item.title}</div>
                <div>{item.price}</div>
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    -
                  </button>
                </div>
              </li>
            );
          })}
        <li
          className="list-group-item d-flex justify-content-end "
          aria-disabled="true"
        >
          <span className="tw-bold fs-3">Total : {totalPrice.toFixed(2)}</span>
        </li>
      </ul>
      <div className="d-flex py-4 justify-content-end">
        <button className="btn btn-danger ">
          Checkout
          <i className="fa-solid fa-cart-shopping m-2 position-relative"></i>
        </button>
      </div>
    </div>
  );
};

export default Cart;
