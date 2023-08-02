import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveCartItem } from "../Redux/Reducer/ProductSlice";


const Cart = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.products);

  const totalPrice = carts.reduce((acc, a) => {
    return acc + a.price;
  }, 0);

  return (
    <>
      <section className="h-100 h-custom">
        <div className="container py-2 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="mb-0">
                  <Link to={"/"}>
                    <h3 classNameName="text-white my-0">
                      <button className="btn btn-primary my-sm-0 fs-4 px-md-5 py-md-2 mx-3 text-white fw-bolder">
                      Back To Products
                      </button>
                    </h3>
                  </Link>
                </div>
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-12">
                      <div className="p-5">
                        <div classNameName="bg-dark p-3 rounded-5">
                          <div className="d-flex justify-content-between align-items-center m-5">
                            <h1 className="fw-bold mb-0 text-white">
                              Total Cart Items
                            </h1>
                            <div classNameName="bg-success px-4 py-3 rounded-3">
                              <h6 className="fw-bold fs-4 mb-0 text-white ">
                                {carts.length} items
                              </h6>
                            </div>
                          </div>
                        </div>
                        <hr className="my-4" />
                        {carts && Object.keys(carts).length > 0 ? (
                          carts.map((item) => {
                            return (
                              <>
                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                  <div className="col-md-2 col-lg-2 col-xl-2">
                                    <img
                                      src={`${item.image}`}
                                      className="img-fluid rounded-3"
                                      alt="Cotton T-shirt"
                                    />
                                  </div>
                                  <div className="col-md-3 col-lg-3 col-xl-3">
                                    <h4 className="text-black mb-0">
                                      {item.title}
                                    </h4>
                                  </div>
                                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                    <h4 className="text-black mb-0">
                                      {item.category}
                                    </h4>
                                  </div>
                                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h3 className="mb-0 fw-bolder">
                                      {item.price}
                                    </h3>
                                  </div>
                                  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <a className="text-white fs-3 bg-danger p-3 rounded-2">
                                      <i
                                        onClick={() =>
                                          dispatch(RemoveCartItem(item.id))
                                        }
                                        className="fas fa-times"
                                        style={{ cursor: "pointer" }}
                                      ></i>
                                    </a>
                                  </div>
                                </div>

                                <hr className="my-4" />
                              </>
                            );
                          })
                        ) : (
                          <h2 classNameName="text-center">
                            Cart is Empty! Shop Now
                          </h2>
                        )}

                        <div className="pt-5 d-flex">
                          <div classNameName="bg-success px-4 py-3 rounded-3"></div>
                          <h2 classNameName="mx-auto fw-bold ">
                            Total Price = {totalPrice}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
