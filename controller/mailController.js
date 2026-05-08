import transporter from "../config/nodemailerConfig.js";

const mailReceived = async (req, res) => {
  const { subject, message } = req.body;

  if (!subject?.trim() || !message?.trim()) {
    return res
      .status(400)
      .json({ ok: false, error: { message: "All fields are required" } });
  }

  try {
    await transporter.sendMail({
      from: process.env.CELEBRANT,
      to: process.env.EMAIL_USER,
      subject,
      text: message,
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
