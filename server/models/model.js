const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/pizzashop");

const pizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      variants: [],
      prices: [],
      category: {
        type: String,
        required: true,
        trim: true,
      },
      image: {
        type: String,
        trim: true,
      },
      description: {
        type: String,
        trim: true,
      }
},{Timestamp:true});

const Pizza = new mongoose.model("pizza",pizzaSchema);


module.exports = Pizza

