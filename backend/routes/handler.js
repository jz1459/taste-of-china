const express = require('express');
const router = express.Router();

const { Food, Size, Lunch } = require("../models/schema");

router.get('/api/allday', async (req, res) => {
    const foods = await Food.find({});
    res.send(foods);
});

router.get('/api/lunch', async (req, res) => {
    const lunch = await Lunch.find({});
    res.send(lunch);
});


module.exports = router;