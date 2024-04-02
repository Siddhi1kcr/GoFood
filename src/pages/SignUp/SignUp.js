import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../SignUp/SignUp.css";
import logo from '../../icons/food.svg'

export default function Signup() {
  const [credentials,setCredentials] = useState({username:"",email:"",password:"",location:""});
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/v1/users/register",{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          username: credentials.username,
          email: credentials.email,
          password: credentials.password,
          location: credentials.location
        })
      })
      const message = await response.json();
      console.log(message);
      navigate("/");
  }
  const onchange = (e) => {
    setCredentials({...credentials,[e.target.name]:e.target.value});
  }
  return (
    <div className="bg">
    <div className="welcomepic">
        <h1>Unleash Your Taste Buds!</h1>
      </div>
      <div className="login">
          <Link className="navbar-brand fst-italic" id="brand-name">
            <img id="logo-pic" src={logo}/>
            Foodie's
          </Link>
        <h1>WELCOME!</h1>
        <h3>Signup to continue</h3>
    <form onSubmit={handleSubmit} className="form-box">
    <div className="details">
      <label htmlFor="exampleInputusername" className="form-label">Username</label>
      <input type="text" className="form-control" id="exampleInputEmail" onChange={onchange} name='username' value={credentials.username}/>
    </div>
    <div className="details">
      <label htmlFor="exampleInputEmail" className="pass-label">Email</label>
      <input type="email" className="form-control" id="exampleInputEmail" onChange={onchange} name='email' value={credentials.email}/>
    </div>
    <div className="details">
      <label htmlFor="exampleInputPassword" className="pass-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword" onChange={onchange} name='password' value={credentials.password}/>
    </div>
    <div className="details">
      <label htmlFor="exampleInputAddress" className="pass-label">Address</label>
      <input type="text" className="form-control" id="exampleInputAddress" onChange={onchange} name='location' value={credentials.location}/>
    </div>
    <div className="btns">
          <button type="submit" className="buttn" >
            Submit
          </button>
          <Link to="/Login" className="buttn2">
            Already a User!
          </Link>
          </div>
  </form>
    </div>
    </div>
  )
}

