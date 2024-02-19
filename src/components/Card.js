import React, { useEffect, useRef, useState } from "react";
import { useCart, useDispatchCart } from "./ContextReducer";
export default function Card(props) {
   
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const priceRef = useRef();
  let foodItem = props.foodItem;
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value)
  },[])

  let data = useCart();
  let dispatch = useDispatchCart();
  const handleAddToCart = async() => {
    let food = []
    for(const item of data){
      if(item.id === foodItem._id){
        food = item;
        break;
      }
    }
    if(food != []){
      if(food.size === size){
        await dispatch({type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty})
        return 
      }
      else if(food.size !== size){
        await dispatch({type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, size: size, qty : qty })
        return 
      }
      return 
    }
    await dispatch({type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, size: size, qty : qty }) 
    // console.log(data);
  }

  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "500px" }}>
        <img className="card-img-top" style={{height:"180px", objectFit: "fill"}} src={props.foodItem.img} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <p className="card-text">{props.foodItem.description}</p>
          <div className="w-100">
            <select className="h-100 bg-success rounded text-white m-2" onChange={(e) => setQty(e.target.value)}> 
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="h-100 bg-success rounded text-white m-2" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
              {priceOptions.map((data) => {
                return <option key={data} value={data}>{data}</option>
              })}
            </select>
            <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
          </div>
          <hr>
          </hr>
          <button className="btn bg-danger text-white ms-2 justify-center" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
