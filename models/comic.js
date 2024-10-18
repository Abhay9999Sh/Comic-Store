// models/Comic.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comicSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter a comic book name"],
    },
    author: {
        type: String,
        required: [true, "Please enter the author's name"],
    },
    year: {
        type: Number,
        required: [true, "Please enter the year of publication"],
    },
    price: {
        type: Number,
        required: [true, "Please enter the price"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    pages: {
        type: Number,
        required: [true, "Please enter the number of pages"],
    },
    condition: {
        type: String,
        enum: ["new", "used"],
        required: true,
    },
    description: {
        type: String,
    },
    summary: {
        type: String,
    },
    
});

const Comic = mongoose.model("Comic", comicSchema);
module.exports = Comic;

