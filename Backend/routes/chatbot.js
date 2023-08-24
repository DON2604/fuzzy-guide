const express = require('express');
const cors = require('cors');
const url = 'https://chatgpt-api8.p.rapidapi.com/';
const API_KEY = '8c8d648c9emsh87341681f1dcf04p1633a4jsne18229bc72d1'
const fetch = require('node-fetch')
router.post('/completions', async (req,res) => {
    const options = {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
        },
        body: [
            {
              content: 'who won the super bowl 2019?',
              role: 'user'
            }
        ]
    };

try {
	const response = await fetch(url, options);
	const result = await response.json();
    res.send(result);
	console.log(result);
} catch (error) {
	console.error(error);
}
})
 