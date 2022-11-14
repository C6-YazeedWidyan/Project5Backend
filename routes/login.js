const express = require("express");
const { login, updateUserById, deleteUserById, getAllUsers, googleLogin } = require("../controllers/login");

const loginRouter = express.Router();

loginRouter.post("/",login);
loginRouter.post("/google",googleLogin)
loginRouter.get("/",getAllUsers);
loginRouter.put("/:id",updateUserById);
loginRouter.delete("/:id",deleteUserById);

module.exports = loginRouter;

////aa
