import mongoose from "mongoose";

const { Schema } = mongoose;

const celebrantSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true },
);

const Celebrant = mongoose.model("Celebrant", celebrantSchema);

export default Celebrant;
