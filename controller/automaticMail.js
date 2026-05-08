import cron from "node-cron";
import transporter from "../config/nodemailerConfig.js";
import fetch from "node-fetch";
import resend from "../config/resendMailer.js";

cron.schedule("*/10 * * * *", async () => {
  await fetch("https://birthday-website-backend.onrender.com/api");
  console.log("Server pinged to stay awake");
});

// Runs at 11:00am on her birthday
cron.schedule(
  "0 11 8 5 *",
  async () => {
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: process.env.CELEBRANT,
      subject: "SURPRISE!!!",
      html: `
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 40px;">
        <h1 style="color: #C9797A;">Hello, Adeshola.</h1>
        <p style="font-size: 16px; color: #5C3A3A;">
          You have a special surprise waiting for you!
        </p>
        <a 
          href="https://birthday-website-seven-alpha.vercel.app/" 
          style="
            display: inline-block;
            background: linear-gradient(135deg, #C9797A, #E8A598);
            color: white;
            padding: 14px 28px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
            font-size: 16px;
            margin-top: 20px;
          "
        >
          Click Here 🎁
        </a>
      </div>
    `,
    });
  },
  {
    timezone: "Africa/Lagos",
  },
);

cron.schedule(
  "0 11 8 5 *",
  async () => {
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "SURPRISE!!!",
      html: `
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 40px;">
        <h1 style="color: #C9797A;">Hello, Adeshola.</h1>
        <p style="font-size: 16px; color: #5C3A3A;">
          You have a special surprise waiting for you!
        </p>
        <a 
          href="https://birthday-website-seven-alpha.vercel.app/" 
          style="
            display: inline-block;
            background: linear-gradient(135deg, #C9797A, #E8A598);
            color: white;
            padding: 14px 28px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
            font-size: 16px;
            margin-top: 20px;
          "
        >
          Click Here 🎁
        </a>
      </div>
    `,
    });
  },
  {
    timezone: "Africa/Lagos",
  },
);
