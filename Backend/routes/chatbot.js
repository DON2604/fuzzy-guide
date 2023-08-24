const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { validationResult } = require("express-validator");

router.post("/chat", fetchuser, async (req, res) => {
  try {
    //if errors, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const url = 'https://chatgpt-api8.p.rapidapi.com/';
    const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '4f1d01abf6mshb3ecb561f6b70dcp128eafjsnad5a6d3d3228',
		'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
	},
      body:
        {
          content: req.body.content,
          role: req.body.role,
        },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    res.send(result);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;