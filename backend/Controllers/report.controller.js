import Report from "../Models/report.model.js";
import Feedback from "../Models/feedback.model.js";
import Order from "../Models/order.model.js";
import Booking from "../Models/bookings.model.js";
import User from "../Models/user.model.js";

/**
 * @desc Create a daily report for a staff
 * @route POST /api/report
 */
export const createReport = async (req, res, next) => {
  try {
    const { staffId, date, summary, challenges } = req.body;

    // Check if staff exists
    const staff = await User.findById(staffId);
    if (!staff) return res.status(404).json({ message: "Staff not found" });

    // Find all feedback, orders, and bookings related to this staff requesting it
    const feedbacks = await Feedback.find({ staffId, date });
    const orders = await Order.find({ staffId, date });
    const bookings = await Booking.find({ staffId, date });

    // Create the report
    const report = await Report.create({
      staffId,
      date,
      summary,
      challenges,
      feedback: feedbacks.map(f => f._id),
      orders: orders.map(o => o._id),
      bookings: bookings.map(b => b._id),
    });

    res.status(201).json({ message: "Report created successfully", report });
  } catch (err) {
    next(err);
  }
};

/**
 * @desc Get all reports
 * @route GET /api/report
 */


export const getAllReports = async (req, res, next) => {
  try {
    const reports = await Report.find()
      .populate("staffId", "name email role")
      .populate("feedback")
      .populate("orders")
      .populate("bookings")
      .sort({ createdAt: -1 });

    res.json({ message: "List of reports", count: reports.length, reports });
  } catch (err) {
    next(err);
  }
};

/**
 * @desc Get a single report by ID
 * @route GET /api/report/:id
 */

export const getOneReport = async (req, res, next) => {
  try {
    const report = await Report.findById(req.params.id)
      .populate("staffId", "name email role")
      .populate("feedback")
      .populate("orders")
      .populate("bookings");

    if (!report) return res.status(404).json({ message: "Report not found" });
    res.json(report);
  } catch (err) {
    next(err);
  }
};

/**
 * @desc Update a report (status or content)
 * @route PUT /api/report/:id
 */
export const updateReport = async (req, res, next) => {
  try {
    const report = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!report) return res.status(404).json({ message: "Report not found" });

    res.json({ message: "Report updated successfully", report });
  } catch (err) {
    next(err);
  }
};

/**
 * @desc Delete a report
 * @route DELETE /api/report/:id
 */

export const deleteReport = async (req, res, next) => {
  try {
    const report = await Report.findByIdAndDelete(req.params.id);
    if (!report) return res.status(404).json({ message: "Report not found" });

    res.json({ message: "Report deleted successfully", report });
  } catch (err) {
    next(err);
  }
};