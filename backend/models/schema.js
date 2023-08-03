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


const Food = mongoose.model("Food", foodSchema);
const Size = mongoose.model("Size", sizeSchema);

module.exports = { Food, Size };