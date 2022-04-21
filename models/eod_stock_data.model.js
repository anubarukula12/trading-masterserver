const mongoose = require("mongoose");
const eodstockdata = new mongoose.Schema(
  {
   eod_stock_id:{
       type:mongoose.Schema.Types.ObjectId, ref:'Exchange'
   },
    eod_date: {
      type: Date,
    },
   code: {
      type: String,
    },
    technical_rating: {
      type: String,
    },
    oscillators_rating:{
        type:String,
    },
   moving_averages_rating:{
       type:String,
   },
},
  {
    timestamps: true,
  }
  );


module.exports = mongoose.model("Eodstockdata", eodstockdata);;