const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");
const {
  validateAuth,
  
} = require("../middlewares/auth");

userRouter.post("/register", userController.registerUser);

userRouter.post("/login", userController.loginUser);

userRouter.get("/me", validateAuth, userController.getAuthenticatedUser);

userRouter.get("/logout", userController.logout);


userRouter.put(
  "/:id/edit",
 
  userController.updateUserProfile
);



module.exports = userRouter;
