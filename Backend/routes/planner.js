const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { validationResult, body } = require("express-validator");

// Route 1: Get search results
const url = 'https://youtube-v3-alternative.p.rapidapi.com/search?query=cat&geo=US&lang=en&type=playlist';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4f1d01abf6mshb3ecb561f6b70dcp128eafjsnad5a6d3d3228',
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

module.exports = router;