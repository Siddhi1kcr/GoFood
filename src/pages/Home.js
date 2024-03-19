import React from "react";
// import  { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Card from "../components/Card";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import Modal from "../modal";
import Cart from "../pages/Cart";
import { useCart } from "../components/ContextReducer";
import foodBowl from "../images/foodBowl.png"
import arrows from "../icons/arrows.svg"
import FoodSlider from "../components/FoodSlider";

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
      <div className="d-flex">
      <div id="frontPage">
      <p id="pick-line">Claim Best Offer on Fast <i id="design-food">Food</i></p>
      <h4>Our job is to filling your tummy with delicious food and with fast and free delivery </h4>
      <button id="order-now" onClick={() => {setcartView(true)}}>ORDER NOW <img id="arrows" src={arrows}/></button>
      {cartView?<Modal onClose={() => {setcartView(false)}}><Cart/></Modal>:null}
      </div>
        <img src={foodBowl} id="foodBowl"/>
      </div>
      <div>
        <FoodSlider/>
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
