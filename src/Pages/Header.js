import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header = () => {
  const { carts } = useSelector((state) => state.products);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      {/* <Link to={"/"}>
          <h1 className="navbar-brand fs-2 mx-3 text-white fw-bold">
         Back to login
          </h1>
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto"></ul>
          <div className="div-inline my-2 my-lg-0">
            <Link to={"/cart"}>
              <button
                className="btn btn-primary my-2 my-sm-0 fs-4 px-md-5 py-md-2 mx-3 text-white fw-bolder"
                type="submit"
              >
                Cart : {carts.length}
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;