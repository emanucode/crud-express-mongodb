import express from "express";

const route = express.Router();

route.post("/", (req, res) => {
  res.send("<h1>Index</h1>");
});
route.get("/", (req, res) => {
  res.send("<h1>Get: Connect</h1>");
});
route.get("/:id", (req, res) => {
  res.send("<h1>Get ID: Connect</h1>");
});
route.put("/:id", (req, res) => {
  res.send("<h1>Put: Connect</h1>");
});
route.delete("/:id", (req, res) => {
  res.send("<h1>Delete: Connect</h1>");
});

export default route;
