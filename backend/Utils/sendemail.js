import nodemailer from "nodemailer";

export const sendEmail = async (to, subject, username, message, link = null) => {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // HTML email body
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 30px;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
          <div style="background-color: #2a9d8f; color: #fff; padding: 15px 20px; border-radius: 10px 10px 0 0;">
            <h2 style="margin: 0; font-size: 22px;">Hostify Lounge</h2>
          </div>

          <div style="padding: 25px; color: #333;">
            <p style="font-size: 16px;">Hi <strong>${username}</strong>,</p>
            <p style="font-size: 15px; line-height: 1.6;">
              ${message}
            </p>

            ${
              link
                ? `<p style="margin-top: 20px;">
                    <a href="${link}" style="background-color: #2a9d8f; color: white; text-decoration: none; padding: 10px 18px; border-radius: 5px; display: inline-block;">
                      Visit Hostify
                    </a>
                  </p>`
                : ""
            }

            ${
              link
                ? `<p style="margin-top: 30px; font-size: 13px; color: #888;">
                    If the button doesn’t work, copy and paste this link into your browser:<br>
                    <a href="${link}" style="color: #2a9d8f;">${link}</a>
                  </p>`
                : ""
            }
          </div>

          <div style="background-color: #fafafa; padding: 15px; text-align: center; border-top: 1px solid #eee; border-radius: 0 0 10px 10px;">
            <p style="font-size: 13px; color: #666;">
              © ${new Date().getFullYear()} Hostify. All rights reserved.<br>
              <a href="${process.env.CLIENT_URL}" style="color: #2a9d8f; text-decoration: none;">Visit our website</a>
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM || `"Hostify" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: htmlContent,
    });

    console.log(`Email sent to ${to}: ${info.response}`);
    return true;

  } catch (error) {
    console.error("Email sending failed:", error.message);

    // Provide detailed debug info only in dev
    if (process.env.NODE_ENV !== "production") {
      console.error("Full error details:", error);
    }

    throw new Error("Email could not be sent. Please check email service configuration.");
  }
};
