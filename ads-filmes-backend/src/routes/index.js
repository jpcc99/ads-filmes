const express = require("express");
const moviesRoutes = require("../routes/movies");

const router = express.Router();

router.use("/movies", moviesRoutes);

module.exports = router;
