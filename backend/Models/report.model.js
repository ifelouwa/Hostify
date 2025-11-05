import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    staffId: { type: String, required: true },
    date: { type: String, required: true },
    feedback: [{ type: mongoose.Schema.Types.ObjectId, ref: "Feedback" }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
    summary: { type: String, required: true },
    challenges: { type: String },
    status: { 
      type: String, 
      enum: ["Submitted", "Reviewed", "Approved"], 
      default: "Submitted" 
    },
  },
  { timestamps: true }
);

export default mongoose.model("Report", reportSchema)