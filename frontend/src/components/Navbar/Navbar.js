import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="main-navbar shadow-sm sticky-top">
      <div className="top-navbar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
              <h5 className="brand-name">E-com</h5>
            </div>
            <div className="col-md-5 my-auto">
              <form role="search">
                <div className="input-group">
                  <input
                    type="search"
                    placeholder="Search your product"
                    className="form-control"
                  />
                  <button className="btn bg-white" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-5 my-auto">
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Link to= '/cart'>
                  <a className="nav-link">
                    <i className="fa fa-shopping-cart"></i> Cart
                  </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                    <div class="btn-group me-2" role="group" aria-label="First group">
                        <Link to= "/loginpage">
                      <button type="button" class="btn btn-success">Login</button></Link>
                      {" "}
                      <Link to='/signuppage'><button type="button" class="btn btn-light">SignUp</button></Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a
            className="navbar-brand d-block d-sm-block d-md-none d-lg-none"
            href="#"
          >
            Funda Ecom
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  All Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New Arrivals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Featured Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Electronics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Fashions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Accessories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Appliances
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
