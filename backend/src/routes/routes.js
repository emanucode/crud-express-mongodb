import express from "express";
import userContoller from "../controllers/controller.js";

const route = express.Router();

route.post("/", userContoller.create);
route.get("/", userContoller.getAll);
route.get("/:id", userContoller.getOne);
route.put("/:id", userContoller.update);
route.delete("/:id", userContoller.delite);

export default route;
