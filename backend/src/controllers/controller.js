import { Schema, model } from "mongoose";

// Modelo para guardar los datos en mi base de datos MongoDB
const task = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
    done: Boolean,
  },
  {
    timeseries: true,
  }
);

export default model("Task", task);
