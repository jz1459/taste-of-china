const express = require('express');
const router = express.Router();

const { Food, Size, Lunch, Hours, Holidays } = require("../models/schema");

router.get('/api/allday', async (req, res) => {
    const foods = await Food.find({});
    res.send(foods);
});

router.get('/api/lunch', async (req, res) => {
    const lunch = await Lunch.find({});
    res.send(lunch);
});

router.get('/api/hours', async (req, res) => {
    const hours = await Hours.find({});
    res.send(hours);
});

router.get('/api/holidays', async (req, res) => {
    const holidays = await Holidays.find({});
    res.send(holidays);
});

module.exports = router;