import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../login/Login.css";
import logo from '../../icons/food.svg'

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    localStorage.setItem("user", response.data);
    localStorage.setItem("userEmail", credentials.email);
    const message = await response.json();
    console.log(message);
    navigate("/");
  };
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg">
      <div className="welcomepic">
        <h1>Unleash Your Taste Buds!</h1>
      </div>
      <div className="login2">
          <Link className="navbar-brand fst-italic" id="brand-name">
            <img id="logo-pic" src={logo}/>
            Foodie's
          </Link>
        <h1>WELCOME BACK!</h1>
        <h3>Login to continue</h3>
        <form onSubmit={handleSubmit} className="form-box">
          <div className="details" >
            <label htmlFor="exampleInputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              onChange={onchange}
              name="email"
              value={credentials.email}
            />
          </div>
          <div className="details" >
            <label htmlFor="exampleInputPassword" className="pass-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              onChange={onchange}
              name="password"
              value={credentials.password}
            />
          </div>
          <div className="btns">
          <button type="submit" className="buttn" >
            Submit
          </button>
          <Link to="/signup" className="buttn2">
            SignUp!
          </Link>
          </div>
          
        </form>
      </div>
    </div>
  );
}
