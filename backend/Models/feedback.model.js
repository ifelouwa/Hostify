import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now },
},

{ timestamps: true });

const Feedback = mongoose.model("Feedback", feedbackSchema);
export default Feedback;