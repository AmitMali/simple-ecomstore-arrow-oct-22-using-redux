import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Carosel from "../components/carosel/Carosel";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const getAllPrducts = async () => {
    setLoading(true);
    await axios
      .get("https://fakestoreapi.com/products?limit=15")
      .then((resp) => {
        setProducts(resp.data);
      })
      .catch((e) => console.log(e));
    setLoading(false);
  };
  useEffect(() => {
    getAllPrducts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Carosel items={products} />
          </div>
        </div>
      </div>
      <div className="container">
        {loading ? (
          "loading....."
        ) : (
          <div class="row mt-4">
            {products &&
              products.map((product) => {
                const { id, image, price, title, description, rating } =
                  product;
                return (
                  <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                    <div className="card w-100 my-2 shadow-2-strong">
                      <img
                        src={image}
                        className="card-img-top p-3"
                        style={{ aspectRatio: " 1 / 1" }}
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">$ {price}</p>
                        <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                          <Link
                            to="#!"
                            className="btn btn-primary shadow-0 me-1"
                            onClick={() =>
                              dispatch(addToCart({ id, title, price, image }))
                            }
                          >
                            Add to cart
                          </Link>
                          <Link
                            to="#!"
                            className="btn btn-light border px-2 pt-2 icon-hover"
                          >
                            <i class="fas fa-heart fa-lg text-secondary px-1"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default Shop;
