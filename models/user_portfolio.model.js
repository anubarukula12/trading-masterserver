const mongoose = require("mongoose");
const userportfolio = new mongoose.Schema(
  {
    user_portfolio_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RegisterUser",
    },
    purchase_quantity: {
      type: Number,
    },
    purchase_price: {
      type: Number,
    },
    sale_quantity: {
      type: Number,
    },
    sale_price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    purchase_date: {
      type: Date,
    },
    sale_date: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Userportfolio", userportfolio);
