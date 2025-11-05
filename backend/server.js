import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import morgan from "morgan";
import { connectDB } from "./Config/db.js";
import { notFound, errorHandler } from './Middlewares/error.middleware.js'
import bookingRoutes from "./Routes/booking.route.js"; 
import feedbackRoutes from './Routes/feedback.route.js';
import orderRoutes from './Routes/order.route.js';
import reportRoutes from './Routes/report.route.js';
import userRoutes from "./Routes/user.route.js";


dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', './views');

//Default route
app.get("/", (req, res) => {
  res.send("Hostify backend is live!");
});

// Routes
app.use("/api/feedback", feedbackRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/users", userRoutes);
app.use('/api/bookings', bookingRoutes)

// basic health
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// for local testing
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// for Vercel deployment
export default app;