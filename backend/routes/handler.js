const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const login = require('../middleware/login');

const { Food, Size, Lunch, Hours, Holidays, Users } = require("../models/schema");

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
        category: foodCategory,
        variants: []
    });
    const results = await newFood.save();
    res.json(results);
});

router.put('/api/edit/all-day', login, async (req, res) => {
    const { foodName, foodPrice } = req.body;
    const results = await Food.findOneAndUpdate({ name: foodName }, { price: foodPrice });
    res.json(results);
});

router.delete('/api/edit/all-day', login, async (req, res) => {
    const { foodName } = req.body;
    const results = await Food.findOneAndDelete({ name: foodName });
    res.json(results);
});


router.post('/api/logout' )

module.exports = router;