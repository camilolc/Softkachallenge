const { Router } = require("express");
const {
  questionGet,
  questionPost,
  questionPut,
  questionDelete,
} = require("../controller/question.controller");

const router = Router();

router.get("/", questionGet);

router.post("/", questionPost);

router.put("/:id", questionPut);

router.delete("/", questionDelete);

module.exports = router;
