import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../icons/food.svg"

export default function Footer() {
  return (
    <div>
    <footer className="row row-cols-5 py-5 mt-5 border-top">
    <div className="col">
    <Link to="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none fs-1 fst-italic">
    <img src={logo} id="logo" alt='logo'/>
    Foodie's
  </Link>
      <p className="m-4">Our job is to filling your tummy with delicious food and with fast and free delivery </p>
      
    </div>

    <div className="col">

    </div>

    <div className="col">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Home</Link></li>
        <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Features</Link></li>
        <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Pricing</Link></li>
        <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">FAQs</Link></li>
        <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">About</Link></li>
      </ul>
    </div>

    <div className="col">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Home</Link></li>
        <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Features</Link></li>
        <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Pricing</Link></li>
        <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">FAQs</Link></li>
        <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">About</Link></li>
      </ul>
    </div>

    <div className="col">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Home</Link></li>
        <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Features</Link></li>
        <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Pricing</Link></li>
        <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">FAQs</Link></li>
        <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">About</Link></li>
      </ul>
    </div>
  </footer>
    </div>
  )
}




// <ul className="list-unstyled d-flex">
      //   <li className="ms-3"><Link className="link-dark" to="#"><svg className="bi" width="24" height="24"><use xlink:to="#twitter"></use></svg></Link></li>
      //   <li className="ms-3"><Link className="link-dark" to="#"><svg className="bi" width="24" height="24"><use xlink:to="#instagram"></use></svg></Link></li>
      //   <li className="ms-3"><Link className="link-dark" to="#"><svg className="bi" width="24" height="24"><use xlink:to="#facebook"></use></svg></Link></li>
      // </ul>