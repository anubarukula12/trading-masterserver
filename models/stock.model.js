const mongoose = require("mongoose");
const stock = new mongoose.Schema(
  {
    stockid: {
     type:mongoose.Schema.Types.ObjectId,
      ref: "Exchange",
    },
    name: {
      type: String,
    },
    code: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Stock", stock);
