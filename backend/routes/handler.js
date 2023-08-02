const express = require('express');
const router = express.Router();

const { Food, Meal, Size } = require("../models/schema");

router.get('/', async (req, res) => {
    const foods = await Food.find({});
});



module.exports = router;