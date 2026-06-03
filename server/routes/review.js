const express = require("express");
const router = express.Router();
const { analyzePR } = require("../services/analyze");

router.post("/", async (req, res) => {
  try {
    const { prUrl } = req.body;

    const result = await analyzePR(prUrl);

    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Analysis failed" });
  }
});

module.exports = router;