import { connect } from "mongoose";

(async () => {
  try {
    const dbCrud = await connect("mongodb://localhost/crudAppBd");
    console.log("DB connect to", dbCrud.connection.name);
  } catch (error) {
    console.error("DB conected error:", error);
  }
})();
