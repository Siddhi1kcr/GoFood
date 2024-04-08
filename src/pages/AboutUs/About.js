import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import founder from "../../images/siddhi.jpeg";
import backarrow from "../../images/back-button.png";
import "../AboutUs/About.css";
import chefs from "../../images/chefs.jpg";
import chefs2 from "../../images/chefs2.jpg";

export default function About() {
  return (
    <div>
      <div className="bg-about">
        <Link to="/">
          <img src={backarrow} className="back" />
        </Link>
        <h1>Foodie's</h1>
        <p>...Crafting magic on plates!</p>
        <h4></h4>
      </div>
      <div className="aboutus">
        <div className="about-text">
          <em>
            <h1>WHO ARE WE ? </h1>
          </em>
          <p>
            Launched in 2024, Our technology platform connects customers,
            restaurant partners and delivery partners, serving their multiple
            needs. Customers use our platform to search and discover
            restaurants, read and write customer generated reviews and view and
            upload photos, order food delivery, book a table and make payments
            while dining-out at restaurants. On the other hand, we provide
            restaurant partners with industry-specific marketing tools which
            enable them to engage and acquire customers to grow their business
            while also providing a reliable and efficient last mile delivery
            service. We also operate a one-stop procurement solution, Hyperpure,
            which supplies high quality ingredients and kitchen products to
            restaurant partners. We also provide our delivery partners with
            transparent and flexible earning opportunities.
          </p>
        </div>
        <div>
          <img src={chefs} className="chefs" />
          <img src={chefs2} className="chefs2" />
        </div>
      </div>
      <div className="outreach">
        <h1>NUMBER CRUNCH</h1>
        <div className="boxes">
          <div className="box">
            <h1>100+</h1>
            <h2>Customers</h2>
          </div>
          <div className="box">
            <h1>500+</h1>
            <h2>Monthly Orders</h2>
          </div>
          <div className="box">
            <h1>50+</h1>
            <h2>Dishes</h2>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
