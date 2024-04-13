import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
import logo from "../icons/food.svg";

export default function Footer() {
  return (
    <div>
      <footer className="row row-cols-5" id="footer">
        <div className="col">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 link-dark text-decoration-none fs-1 fst-italic"
          >
            <img src={logo} id="logo-footer" alt="logo" />
           <div className="pt-4">Foodie's</div> 
          </Link>
          <p className="m-4">
            Our job is to filling your tummy with delicious food and with fast
            and free delivery{" "}
          </p>
        </div>
        <div className="col2 py-5">
          <h5>About</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                About Us
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Features
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                News
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Menu
              </Link>
            </li>
          </ul>
        </div>

        <div className="col2 py-5">
          <h5>Company</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Why Foodie's?
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Partner With Us
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                FAQs
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="col2 py-5">
          <h5>Support</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Account
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Feedback
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Support Center
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="col2 py-5">
          <h5>Get in Touch</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                Question or feedback?
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="#" className="nav-link p-0 text-muted">
                We'd love to hear from you
              </Link>
            </li>
            <button className="mt-4" id="email-now">
              Email Address{" "}
            </button>
          </ul>
        </div>
      </footer>
    </div>
  );
}

