const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { validationResult } = require("express-validator");

router.post("/chat", fetchuser, async (req, res) => {
    try{
  //if errors, return bad request
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).send({ errors: errors.array() });
  // }
  const question = encodeURIComponent(req.body.content);
  const url = `https://chatgpt-api9.p.rapidapi.com/chat?question=${question}`;
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '4f1d01abf6mshb3ecb561f6b70dcp128eafjsnad5a6d3d3228',
          'X-RapidAPI-Host': 'chatgpt-api9.p.rapidapi.com'
      },
  };
      const response = await fetch(url, options);
      const result = await response.text();
      res.json(result)
      console.log(result);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
