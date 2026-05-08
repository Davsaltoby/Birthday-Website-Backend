import Celebrant from "../model/celebrantModel.js";

export const celebrantValidation = async (req, res, next) => {
  const { name, password } = req.body;
  if (!name.trim() || !password.trim()) {
    return res
      .status(400)
      .json({ ok: false, error: { message: "This field is required" } });
  }

  const casedName = name.trim().toLowerCase();

  const celebrant = await Celebrant.findOne({ name: casedName });

  if (celebrant) {
    return res.status(400).json({
      ok: false,
      error: { message: `celebrant; ${name} already got the surprise` },
    });
  }

  if (!password.trim().toLowerCase().includes(process.env.CELEBRANT_PASSWORD)) {
    return res
      .status(403)
      .json({ ok: false, error: { message: "Access denied!" } });
  }
  next();
};
