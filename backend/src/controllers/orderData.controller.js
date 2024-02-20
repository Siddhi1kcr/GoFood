import { Order } from "../models/orders.model.js";

const OrderData = async ( req ,res) => {
    let data = req.body.order_data;
    await data.splice(0,0,{Order_date: req.body.order_date})

    let eId = await Order.findOne({'email': req.body.email})
    if(eId === null){
       try {
        await Order.create({
            email: req.body.email,
            order_data: [data]
        }).then(() => {
            res.json({success:true})
        })
       } catch (error) {
         console.log(error)
       }
    }
    else{
        try {
            await Order.findOneAndUpdate(
                {email: req.body.email},
                {
                    $push:{
                        order_data: data
                    }
                }
            ).then(() => {
                res.json({success:true})
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export {OrderData}

