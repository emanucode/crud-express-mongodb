import "dotenv/config"; // <-- llamamos a las variables de conficuracion .env
// Conficuraation (type: "module") on package.json
import express from "express";
import userRoutes from "./src/routes/routes.js";

import "./src/config/bd.js";

const app = express();

app.use("/user", userRoutes);

try {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server on port http://localhost:${PORT}`);
  });
} catch (err) {
  console.error(err);
}
