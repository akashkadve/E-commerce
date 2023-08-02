import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, fetchAllProducts } from "../Redux/Reducer/ProductSlice";
import Header from "./Header";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const { products, loading } = useSelector((state) => state.products);
  return (
    <>
    <Header />
      <div className="container">
        <div className="col-md-12">
          <div className="row">
            <h1 className="text-center my-4 fw-bold">BUY PRODUCTS</h1>
            {loading && <h2 className="text-center">Loading..</h2>}
            {products &&
              products.map((item) => {
                return (
                  <div class="card mx-auto my-4" style={{ width: "18rem" }}>
                    <img
                      class="card-img-top img-responsive mx-auto my-2"
                      src={`${item.image}`}
                      style={{width: "150px"}}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <p class="card-text fs-5 my-auto">{item.title}</p>
                      <p class="card-text fs-3">${item.price}</p>
                      <div class="d-grid gap-2">
                      <button
                        onClick={() => dispatch(AddToCart(item.id))}
                        className="btn btn-info py-2 fs-4 fst-italic my-auto"
                      >
                        Add to Cart
                      </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;