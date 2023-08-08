const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const login = require('../middleware/login');

const { Food, Lunch, Hours, Holidays, Users } = require("../models/schema");

// Routes available to everyone
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

// Routes that are hidden behind authentication wall
router.post('/api/login', async (req, res) => {

    const user = await Users.findOne({ username: req.body.username, password: req.body.password }).exec();
    if (user) {
        const accessToken = jwt.sign(
            {
                id: user._id
            },
            process.env.SECRET,
            { expiresIn: "1h" }
        );
        res.json({
            accessToken,
        });
    } else {
        res.status(400).json("Unauthorized User (invalid username/password)");
    }
});

router.post('/api/edit/all-day', login, async (req, res) => {
    const { foodName, foodPrice, foodCategory } = req.body;
    const newFood = new Food({
        name: foodName,
        price: foodPrice,
        category: foodCategory
    });
    const results = await newFood.save();
    res.json(results);
});

router.put('/api/edit/all-day', login, async (req, res) => {
    const { foodName, foodPrice, foodCategory } = req.body;
    const results = await Food.findOneAndUpdate({ name: foodName, category: foodCategory }, { price: foodPrice }, {
        new: true
    });
    res.json(results);
});

router.delete('/api/edit/all-day', login, async (req, res) => {
    const { foodName, foodCategory } = req.body;
    const results = await Food.findOneAndDelete({ name: foodName, category: foodCategory });
    res.json(results);
});

router.post('/api/edit/lunch', login, async (req, res) => {
    const { lunchName, lunchPrice } = req.body;
    const newLunch = new Lunch({
        name: lunchName,
        price: lunchPrice
    });
    const results = await newLunch.save();
    res.json(results);
});

router.put('/api/edit/lunch', login, async (req, res) => {
    const { lunchName, lunchPrice } = req.body;
    const results = await Lunch.findOneAndUpdate({ name: lunchName }, { price: lunchPrice }, {
        new: true
    });
    res.json(results);
});

router.delete('/api/edit/lunch', login, async (req, res) => {
    const { lunchName } = req.body;
    const results = await Lunch.findOneAndDelete({ name: lunchName });
    res.json(results);
});

router.post('/api/edit/hours', login, async (req, res) => {
    const { dayName, hours } = req.body;
    const newHours = new Hours({
        day: dayName,
        hours: hours
    });
    const results = await newHours.save();
    res.json(results);
});

router.put('/api/edit/hours', login, async (req, res) => {
    const { dayName, hours } = req.body;
    const results = await Hours.findOneAndUpdate({ day: dayName }, { hours: hours }, {
        new: true
    });
    res.json(results);
});

router.delete('/api/edit/hours', login, async (req, res) => {
    const { dayName } = req.body;
    const results = await Hours.findOneAndDelete({ day: dayName });
    res.json(results);
});

router.post('/api/edit/holidays', login, async (req, res) => {
    const { holidayName, holidayHours } = req.body;
    const newHoliday = new Holidays({
        day: holidayName,
        hours: holidayHours
    });
    const results = await newHoliday.save();
    res.json(results);
});

router.put('/api/edit/holidays', login, async (req, res) => {
    const { holidayName, holidayHours } = req.body;
    const results = await Holidays.findOneAndUpdate({ day: holidayName }, { hours: holidayHours }, {
        new: true
    });
    res.json(results);
});

router.delete('/api/edit/holidays', login, async (req, res) => {
    const { holidayName } = req.body;
    const results = await Holidays.findOneAndDelete({ day: holidayName });
    res.json(results);
});

module.exports = router;