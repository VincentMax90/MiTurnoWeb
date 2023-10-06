const express = require("express");
const router = express.Router();
const userRouter = require("./user.route");
const locationRouter = require("./location.route")
const appoimentRouter = require("./appoiment.route")

router.use("/user", userRouter);
router.use("/location",locationRouter)
router.use("/appoiment", appoimentRouter)

module.exports = router;
