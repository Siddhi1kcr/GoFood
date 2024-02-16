import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [credentials,setCredentials] = useState({username:"",email:"",password:"",location:""});
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
  }
  const onchange = (e) => {
    setCredentials({...credentials,[e.target.name]:e.target.value});
  }
  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="exampleInputusername" className="form-label">Username</label>
      <input type="text" className="form-control" id="exampleInputEmail" onChange={onchange} name='username' value={credentials.username}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail" className="form-label">Email</label>
      <input type="email" className="form-control" id="exampleInputEmail" onChange={onchange} name='email' value={credentials.email}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword" onChange={onchange} name='password' value={credentials.password}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputAddress" className="form-label">Address</label>
      <input type="text" className="form-control" id="exampleInputAddress" onChange={onchange} name='location' value={credentials.location}/>
    </div>
    <button type="submit" className="btn btn-success">Submit</button>
    <Link to="/login" className='btn btn-danger m-3'>Already a user!</Link>
  </form>
    </div>
  )
}

