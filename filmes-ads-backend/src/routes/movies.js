const express = require("express");
const router = express.Router();

const MoviesController = require("../controllers/MoviesController");

router.get("/", MoviesController.list);
router.get("/:id", MoviesController.getDetailsById);
router.post("/", MoviesController.create);

module.exports = router;
