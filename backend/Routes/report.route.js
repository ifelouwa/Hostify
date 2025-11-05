import express from "express";
import { protect, adminOnly } from "../Middlewares/auth.middleware.js";
import {
  createReport,
  getAllReports,
  getOneReport,
  updateReport,
  deleteReport,
} from "../Controllers/report.controller.js";


const router = express.Router();

// Admin can create report
router.post("/create", protect, createReport);       

// Only admin sees all reports
router.get("/all", protect, adminOnly, getAllReports); 

// Admin views just one report by id
router.get("/:id", protect, getOneReport);

// Admin can update report
router.put("/:id", protect, updateReport);    

// Admin can delete report
router.delete("/:id", protect, adminOnly, deleteReport); 

export default router;
