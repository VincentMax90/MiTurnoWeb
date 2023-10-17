const express = require("express");
const appointmentRouter = express.Router();
const appointmentController = require("../controllers/appointment.controller");



appointmentRouter.post("/create", appointmentController.createAppointment);

appointmentRouter.put("/edit/:id",appointmentController.editAppointment);

appointmentRouter.delete("/delete/:id",appointmentController.deleteAppointment);

appointmentRouter.get("/searchAll",appointmentController.searchAll)

appointmentRouter.get("/user/:id",appointmentController.searchUserId)

appointmentRouter.get("/location/:id",appointmentController.findByLocation)
module.exports = appointmentRouter;