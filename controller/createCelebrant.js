import Celebrant from "../model/celebrantModel.js";
import JWT from "jsonwebtoken";

export const createCelebrant = async (req, res) => {
  const { name } = req.body;

  const casedName = name.trim().toLowerCase();
  try {
    const celebrant = await Celebrant.create({ name: casedName });

    const token = JWT.sign(
      { userName: celebrant.name, userId: celebrant._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.status(201).json({
      ok: true,
      message: "celebrant created successfully",
      data: { celebrant, celebrantMsg },
      token,
    });
  } catch (err) {
    res
      .status(500)
      .json({ ok: false, error: { message: "cannot create celebrant" } });
    console.log(err.message);
  }
};
