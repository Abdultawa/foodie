import express from "express";
import route from "./routes/foodRoute.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://abdultawabnasir:localhost@foodie.x7yby.mongodb.net/?retryWrites=true&w=majority&appName=foodie"
);

app.use("/api", route);

app.listen(3000, () => {
  console.log("listening to port 3000");
});
