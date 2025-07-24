const express = require("express");
const router = express.Router();

const MoviesController = require("../controllers/MoviesController");

router.get("/", MoviesController.listar);
router.get("/:id", MoviesController.getDetailsById);

module.exports = router;
