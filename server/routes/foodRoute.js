import express from "express";
import { getFood, addFood } from "../controllers/foodController.js";

const route = express.Router();

route.get("/", getFood);
route.post("/add", addFood);

export default route;
