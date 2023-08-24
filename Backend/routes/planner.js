const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { validationResult } = require("express-validator");

// Route 1: Get search results
router.get("/getplaylist", fetchuser, async (req, res) => {
  try {
    const { searchphase } = req.body;
    //if errors, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query=${searchphase}&geo=US&lang=en&type=playlist`;
    const options = {
      headers: {
        "X-RapidAPI-Key": "4f1d01abf6mshb3ecb561f6b70dcp128eafjsnad5a6d3d3228",
        "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    res.send(result);
  } catch (error) {
    console.error(error);
  }
});

router.get("/getvideos", fetchuser, async (req, res) => {
  try {
    const { specificplaylist } = req.body;
    //if errors, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const url = `https://youtube-v3-alternative.p.rapidapi.com/playlist?id=${specificplaylist}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4f1d01abf6mshb3ecb561f6b70dcp128eafjsnad5a6d3d3228',
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
};
	const response = await fetch(url, options);
	const result = await response.json();
  res.send(result);
} catch (error) {
	console.error(error);
}
});

module.exports = router;
