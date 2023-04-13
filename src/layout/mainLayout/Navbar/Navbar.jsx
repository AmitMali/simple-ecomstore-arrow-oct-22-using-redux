import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const count = useSelector((state) => state.counter.count);
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Redux Demo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to={"/"}>
              Home
            </Link>

            <Link className="nav-link" to={"/counter"}>
              Counter
            </Link>
            <Link className="nav-link" to={"/shop"}>
              shop
            </Link>
          </div>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link " to={"/cart"}>
              <i className="fa-solid fa-cart-shopping me-2 position-relative">
                <span class="position-absolute top-0 start-100  badge rounded-pill bg-danger">
                  {cartItems.length}
                  <span class="visually-hidden">unread messages</span>
                </span>
              </i>
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
