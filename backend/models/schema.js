const mongoose = require("mongoose");

const foodSchema = {
    name: String,
    price: String,
    category: String
};

const lunchSchema = {
    name: String,
    price: String
};

const hoursSchema = {
    day: String,
    hours: String
};

const holidaysSchema = {
    day: String,
    hours: String
};

const userSchema = {
    username: String,
    password: String
};

const Food = mongoose.model("Food", foodSchema);
const Lunch = mongoose.model("Lunch", lunchSchema);
const Hours = mongoose.model("Hours", hoursSchema);
const Holidays = mongoose.model("Holidays", holidaysSchema);
const Users = mongoose.model("Users", userSchema);


module.exports = { Food, Lunch, Hours, Holidays, Users };