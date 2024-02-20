import React, {useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'

export default function Login() {
  const [credentials,setCredentials] = useState({email:"",password:""});
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/v1/users/login",{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          email: credentials.email,
          password: credentials.password
        })
      })
      localStorage.setItem('user', response.data)
      localStorage.setItem('userEmail', credentials.email)
      const message = await response.json();
      console.log(message);
      navigate("/");
  }
  const onchange = (e) => {
    setCredentials({...credentials,[e.target.name]:e.target.value});
  }
  return (
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail" className="form-label">Email</label>
      <input type="email" className="form-control" id="exampleInputEmail" onChange={onchange} name='email' value={credentials.email}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword" onChange={onchange} name='password' value={credentials.password}/>
    </div>
    <button type="submit" className="btn btn-success">Submit</button>
    <Link to="/signup" className='btn btn-danger m-3'>I'm a user!</Link>
  </form>
    </div>
  )
}


