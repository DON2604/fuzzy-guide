const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { validationResult } = require("express-validator");

router.get("/chat", fetchuser, async (req, res) => {
  try {
    //   if errors, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const question = encodeURIComponent(req.body.content);
    const url = `https://chat-gpt-ai-bot.p.rapidapi.com/GenerateAIWritter?prompt=${question}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8c8d648c9emsh87341681f1dcf04p1633a4jsne18229bc72d1",
        "X-RapidAPI-Host": "chat-gpt-ai-bot.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const result = await response.text();
    res.json(result);
    console.log(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
