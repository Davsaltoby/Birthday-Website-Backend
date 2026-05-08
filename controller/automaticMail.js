import cron from "node-cron";
import transporter from "../config/nodemailerConfig.js";

// Runs at 11:00am on her birthday
cron.schedule(
  "0 9 8 5 *",
  async () => {
    await transporter.sendMail({
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
