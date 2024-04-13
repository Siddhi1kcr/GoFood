import React from "react";
// import  { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// import Card from "../components/Card";
import { useState } from "react";
import Modal from "../../modal";
import Cart from "../pages/Cart";
import foodBowl from "../images/foodBowl.jpg";
import arrows from "../icons/arrows.svg";
import FoodSlider from "../../components/FoodSlider/FoodSlider";
import onlineorder from "../images/online-order.png";
import deliveryboy from "../images/delivery-boy.png";
import waiter from "../images/waiter.png";
import chef from "../images/chef.png";
import star from "../images/star.png";
import star2 from "../images/star2.png";
import customer from "../images/customer.jpg";

export default function Home() {
  // const [search,setsearch] = useState('');
  // // value={search} onChange={(e)=>setsearch(e.target.value)}
  // const [food_items, setfood_items] = useState([]);
  // const [food_category, setfood_category] = useState([]);

  // const loadData = async () => {
  //   let response = await fetch("http://localhost:5000/api/v1/users/foodData", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   response = await response.json();
  //   setfood_items(response.data[0]);
  //   setfood_category(response.data[1]);
  // console.log(response.data[0],response.data[1]);
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  const [cartView, setcartView] = useState(false);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="d-flex justify-content-between">
        <div id="frontPage">
          <p id="pick-line">
            Claim Best Offer on Fast <i id="design-food">Food</i>
          </p>
          <h4>
            Our job is to filling your tummy with delicious food and with fast
            and free delivery{" "}
          </h4>
          <button
            id="order-now"
            onClick={() => {
              setcartView(true);
            }}
            
          >
            ORDER NOW <img id="arrows" src={arrows} />
          </button>
          {cartView ? (
            <Modal
              onClose={() => {
                setcartView(false);
              }}
            >
              <Cart />
            </Modal>
          ) : null}
        </div>
        <img src={foodBowl} id="foodBowl" />
      </div>
      <div id="food-slider" >
        <FoodSlider />
      </div>
      <div className="mt-5 ">
        <h4 className="fs-4 d-flex  justify-content-center" id="textColor">
          WHAT WE SERVE
        </h4>
        <h2 className="fs-1 d-flex  justify-content-center">
          Your Favourite Food Delivery Partner
        </h2>
      </div>
      <div>
        <ul className="d-flex justify-content-evenly mt-5" id="ul-serve">
          <li>
            <img src={onlineorder} id="illustrations" />
            <h3 className="fs-3 d-flex  justify-content-center">
              Easy to Order
            </h3>
            <p>You only need a few steps in ordering food</p>
          </li>
          <li>
            <img src={deliveryboy} id="illustrations-2" />
            <h3 className="fs-3 d-flex  justify-content-center">
              Fastest Delivery
            </h3>
            <p>Delivery that is always ontime even faster</p>
          </li>
          <li>
            <img src={waiter} id="illustrations" />
            <h3 className="fs-3 d-flex  justify-content-center">
              Best Quality
            </h3>
            <p>Not only fast for us quality is also number one</p>
          </li>
        </ul>
      </div>
      <div className="d-flex justify-content-center border" id="testimonials">
        <div className="w-50 d-flex justify-content-center">
          <img src={chef} id="chef-img" />
        </div>
        <div  id="message" >
          <h4 className="fs-4 d-flex mt-5" id="textColor">
            WHAT THEY SAY
          </h4>
          <h2 className="fs-1 d-flex m">
            What Our Customers Say About Us
          </h2>
          <div >
          <p className="mt-4">
            Foodie's is the best. Besides the many and delicious meals, the
            service is also very good, especially in the very fast delivery. I
            highly recommend Foodie's to you guysss. Enjoy!!!
          </p>
          <div className="d-flex mt-5">
            <img src={customer} id="customer"/>
            <div >
            <h6>Nancy</h6>
            <p>Food Enthusiast</p>
            </div>
          </div>
          <div className="d-flex">
             <img src={star} id="star"/>
             <img src={star} id="star" />
             <img src={star} id="star"/>
             <img src={star} id="star"/>
             <img src={star2} id="star2"/>
             <p className="mt-3">(4.8)</p>
          </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

// <div className="container">
//         {food_category != []
//           ? food_category.map((data) => {
//               return (
//                 <div className="row mb-3">
//                   <div key={data.id} className="fs-2 m-3">
//                     {data.CategoryName}
//                   </div>
//                   <hr />
//                   {food_items != [] ? (
//                     food_items
//                       .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
//                       .map((filterItems) => {
//                         return (
//                           <div
//                             key={filterItems.id}
//                             className="col-12 col-md-6 col-lg-3"
//                           >
//                             <Card
//                               foodItem={filterItems}
//                               options={filterItems.options[0]}
//                             ></Card>
//                           </div>
//                         );
//                       })
//                   ) : (
//                     <div>No such data found</div>
//                   )}
//                 </div>
//               );
//             })
//           : ""}
//       </div>
