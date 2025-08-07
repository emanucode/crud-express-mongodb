import { Schema, model } from "mongoose";

// Modelo para guardar los datos en mi base de datos MongoDB
const task = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      reim: true,
    },
    description: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timeseries: true,
    versionKey: false,
  }
);

export default model("Task", task);
