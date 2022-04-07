const { Router } = require("express");
const {
  scoreGet,
  scorePost,
  scorePut,
  scoreDelete,
} = require("../controller/score.controller");

const router = Router();

router.get("/", scoreGet);

router.post("/", scorePost);

router.put("/:id", scorePut);

router.delete("/", scoreDelete);

module.exports = router;
