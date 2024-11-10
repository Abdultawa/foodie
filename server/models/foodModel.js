import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  foodName: String,
  quantity: Number,
});

const Food = mongoose.model("Food", foodSchema);

export default Food;
