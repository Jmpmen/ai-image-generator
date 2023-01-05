const express = require("express");
const router = express.Router();
const openaiController = require("../controllers/openai");

router.get("/", openaiController.getIndex);
router.post("/", openaiController.generateImage);

module.exports = router;