const mongoose = require("mongoose");

const sizeSchema = {
    size: String,
    price: Number,
};

const foodSchema = {
    name: String,
    price: Number,
    variants: [sizeSchema]
};

const mealSchema = {
    name: String,
    foods: [foodSchema]
};

const Food = mongoose.model("Food", foodSchema);
const Meal = mongoose.model("Meal", mealSchema);
const Size = mongoose.model("Size", sizeSchema);

module.exports = { Food, Meal, Size };