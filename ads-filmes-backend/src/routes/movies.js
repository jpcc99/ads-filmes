const express = require("express");
const MovieController = require("../controllers/MovieController");

const router = express.Router();

router.get("/", MovieController.list);
router.get("/:id", MovieController.getMovieById);
router.post("/", MovieController.create);
router.put("/:id", MovieController.update);
router.delete("/:id", MovieController.remove);

module.exports = router;
