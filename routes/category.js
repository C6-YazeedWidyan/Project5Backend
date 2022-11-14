const express = require("express");
const { getAllCatagories } = require("../controllers/category");

const categoryRouter = express.Router();

// categoryRouter.post("/add",addCatagory);
categoryRouter.get("/", getAllCatagories);
// categoryRouter.put("/update",updateCatagory);
// categoryRouter.delete("/delete",deleteCatagory);

module.exports = categoryRouter;
//a
