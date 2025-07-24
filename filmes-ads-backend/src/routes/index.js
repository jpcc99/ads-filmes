const express = require("express");
const router = express.Router();

const moviesRouter = require("./movies");

router.get("/", (req, res) => {
  res.status(200).send("Hello World");
})

router.use("/movies", moviesRouter);

module.exports = router;
