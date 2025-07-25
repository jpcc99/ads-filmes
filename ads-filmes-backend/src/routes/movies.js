const express = require("express");
const MovieController = require("../controllers/MovieController");

const router = express.Router();

router.get("/", MovieController.list);
router.get("/:id", MovieController.getMovieById);
router.post("/", MovieController.create);
router.put("/:id", (_req, res) => res.status(501).send("Ainda não implementado"));
router.delete("/:id", (_req, res) => res.status(501).send("Ainda não implementado"));

module.exports = router;
