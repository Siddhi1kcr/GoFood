import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Modal from "../modal";
import Cart from "../pages/Cart";
import { useCart } from "./ContextReducer";
import login from "../icons/login.svg";
import logo from "../icons/food.svg"
import cart from "../icons/cart.png"
import search from "../icons/search.svg"

export default function Navbar() {
  const [cartView, setcartView] = useState(false);
  let data = useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic mx-3" to="/">
            <img id="logo" src={logo}/>
            Foodie's
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5 mx-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
              <Link
                  className="nav-link  fs-5 mx-5"
                  aria-current="page"
                  to="/"
                >
                  Menu
                </Link>
                </li>
                <li>
                <Link
                  className="nav-link fs-5 mx-5"
                  aria-current="page"
                  to="/"
                >
                  About us
                </Link>
                </li>
              {localStorage.getItem("user") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link fs-5 mx-5"
                    aria-current="page"
                    to="/myOrderData"
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("user") ? (
              <div className="d-flex">
              <img src={search} id="search" />
                <Link id="login-btn" to="/login">
                <img id="login" src={login}/>
                  Login
                </Link>
              </div>
            ) : (
              <div className="d-flex">
              
                <div className="btn bg-white text-success mx-2" onClick={() => {setcartView(true)}}>
                <img src={cart} id="cart" />
                  <Badge pill bg="danger"> {data.length} </Badge>
                </div>
                {cartView?<Modal onClose={() => {setcartView(false)}}><Cart/></Modal>:null}
                <button id="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )} 
          </div>
        </div>
      </nav>
    </div>
  );
}


/*
                <Link className="btn bg-white text-success mx-1" to="/signup">
                  SignUp
                </Link>
                */