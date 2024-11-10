import Food from "../models/foodModel.js";

export const getFood = async (req, res) => {
  const food = await Food.find();
  res.json(food);
};

export const addFood = async (req, res) => {
  const { foodName, quantity } = req.body;
  const food = new Food({ foodName, quantity });
  await food.save();
  res.json("Food Added");
};
