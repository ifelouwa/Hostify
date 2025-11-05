import path from "path";
import ejs from "ejs";
import nodemailer from "nodemailer";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


export const sendBookingConfirmation = async (booking) => {
  try {
    const templatePath = path.join(
      __dirname, "../views/email/bookingConfirmation.ejs",
      
    );


    const html = await ejs.renderFile(templatePath, { booking });

    
    await transporter.sendMail({
      from: `"Hostify Lounge" <${process.env.EMAIL_USER}>`,
      to: booking.email,
      subject: `Booking Confirmed — ${booking.space}`,
      html,
    });

    console.log(`Confirmation email sent to ${booking.email}`);
  } catch (err) {
    console.error(" Error sending booking confirmation email:", err.message);
  }
};


export const sendBookingCancellation = async (booking) => {
  try {
    const templatePath = path.join(
      __dirname,"../Views/email/bookingCancellation.ejs",
      
    );

    
    const html = await ejs.renderFile(templatePath, { booking });

    
    await transporter.sendMail({
      from: `"Hostify Lounge" <${process.env.EMAIL_USER}>`,
      to: booking.email,
      subject: `Booking Cancelled — ${booking.space}`,
      html,
    });

    console.log(` Cancellation email sent to ${booking.email}`);
  } catch (err) {
    console.error(" Error sending booking cancellation email:", err.message);
  }
};
