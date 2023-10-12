const express = require("express");
const locationRouter = express.Router();
const locationController = require("../controllers/location.controller");



locationRouter.post("/creation",  locationController.locationCreation);


locationRouter.put("/edit/:id",locationController.locationEdit);


locationRouter.delete("/delete/:id",locationController.locationDelete);

locationRouter.get("/allSearch" ,locationController.locationsearch)

module.exports = locationRouter