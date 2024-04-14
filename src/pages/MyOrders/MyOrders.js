import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer';
import arrows from "../../icons/arrows.svg"
import backarrow from "../../images/arrow.png";
import {Link} from "react-router-dom";
import './MyOrders.css'

export default function MyOrders() {

    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:5000/api/v1/users/myOrderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setorderData(response)
        })



        // await res.map((data)=>{
        //    console.log(data)
        // })


    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div id='full-page'>
        <div id="full-page" className='container'>
        <div className='d-flex'>
           <Link to="/">
           <img src={backarrow} id="backarrow" alt='arrow'/>
           </Link>
            <div id="orders-heading">
               Your Orders
            </div>
            </div>
            <div className='container' >
                <div className='row' id="myorder-page">
                    {orderData != {} ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div >
                                                    {arrayData.Order_date ?<div> <div className='m-auto mt-5 d-flex justify-content-between'  >
                                                      <div className='fs-4 mx-4 my-1'> <em>Delivered on</em>  - {data = arrayData.Order_date}</div>
                                                      <div className='mx-5'>
                                                       <button id="order-now" className='m-0 px-4 py-2'>Reorder<img id="arrows" alt='arr' src={arrows}/></button>
                                                       </div>
                                                        
                                                    </div><hr /></div> :

                                                        <div className='col-12 col-md-6 col-lg-3' >
                                                            <div className="card mx-4 my-3" id="myorder-page" style={{ width: "16rem", maxHeight: "360px" }}>
                                                                <div className="card-body" >
                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1'>{arrayData.qty}</span>
                                                                        <span className='m-1'>{arrayData.size}</span>
                                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                            ₹{arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                                
                                               
                                            )
                                            
                                        })
                                        
                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>

                </div>
            </div>
            <Footer />
        </div>
       
    )
}
// {"orderData":{"_id":"63024fd2be92d0469bd9e31a","email":"mohanDas@gmail.com","order_data":[[[{"id":"62ff20fbaed6a15f800125e9","name":"Chicken Fried Rice","qty":"4","size":"half","price":520},{"id":"62ff20fbaed6a15f800125ea","name":"Veg Fried Rice","qty":"4","size":"half","price":440}],"2022-08-21T15:31:30.239Z"],[[{"id":"62ff20fbaed6a15f800125f4","name":"Mix Veg Pizza","qty":"4","size":"medium","price":800},{"id":"62ff20fbaed6a15f800125f3","name":"Chicken Doub;e Cheeze Pizza","qty":"4","size":"regular","price":480}],"2022-08-21T15:32:38.861Z"]],"__v":0}}
//