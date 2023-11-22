const express = require('express');
const router = express.Router();

router.use((req,res,next) => {
	console.log("TIME: ", Date.now());
	next();
});

router.get('/', (req,res) => {
	res.send('App home page');
});

router.get('/about', (req,res,next) => {
	res.send('App About Page');
});

module.exports = router;

