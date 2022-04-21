const mongoose = require("mongoose");
const exchange = new mongoose.Schema(
  {
    exchangeid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
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

module.exports = mongoose.model("Exchange", exchange);
