const express = require('express');
const router = express.Router();

const { Food, Size } = require("../models/schema");

router.get('/', async (req, res) => {
    const foods = await Food.find({});
    res.send(foods);
});


module.exports = router;