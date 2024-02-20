import mongoose,{Schema} from "mongoose";

const OrderSchema = new Schema(
    {
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    order_data: {
        type: Array,
        required: true
    }
}
,
{timestamps: true}
)

export const Order = mongoose.model("Order", OrderSchema);