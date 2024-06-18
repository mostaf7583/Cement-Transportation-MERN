// routes/userRoutes.js
const express = require("express");
const { getAllTrucks, createTruck } = require("../controller/TruckController");
const router = express.Router();

// Define routes
router.get("/users", getAllUsers);
router.get("/getalltrucks",getAllTrucks);
router.post("/createtrucks",createTruck);



// router.get("/users/:id", getUserById);

module.exports = router;
