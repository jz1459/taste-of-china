const mongoose = require("mongoose");

const sizeSchema = {
    size: String,
    price: String,
};

const foodSchema = {
    name: String,
    price: String,
    category: String,
    variants: [sizeSchema]
};

const lunchSchema = {
    name: String,
    price: String,
    category: String
};

const Food = mongoose.model("Food", foodSchema);
const Size = mongoose.model("Size", sizeSchema);
const Lunch = mongoose.model("Lunch", lunchSchema)

module.exports = { Food, Size, Lunch };