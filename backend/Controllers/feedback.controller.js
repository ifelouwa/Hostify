import Feedback from "../Models/feedback.model.js";

// Create feedback
export const createFeedback = async (req, res, next) => {
  try {
    const { rating, comment } = req.body;
    const feedback = await Feedback.create({ userId: req.user.id, rating, comment });
    res.status(201).json({ success: true, feedback });
  } catch (err) {
    next(err);
  }
};

// Get all feedback (Admin)
export const getAllFeedback = async (req, res, next) => {
  try {
    const feedbacks = await Feedback.find().populate("userId", "name email");
    res.json({ success: true, feedbacks });
  } catch (err) {
    next(err);
  }
};