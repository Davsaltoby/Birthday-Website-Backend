import transporter from "../config/nodemailerConfig.js";
import resend from "../config/resendMailer.js";

const mailReceived = async (req, res) => {
  const { subject, message } = req.body;

  if (!subject?.trim() || !message?.trim()) {
    return res
      .status(400)
      .json({ ok: false, error: { message: "All fields are required" } });
  }

  try {
    await resend.emails.send({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject,
      html: `<p>${message}</p>`,
    });

    res.status(200).json({
      ok: true,
      message: `mail sent successfully to ${process.env.EMAIL_USER}`,
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: { message: "cannot send mail" } });
  }
};

export default mailReceived;
