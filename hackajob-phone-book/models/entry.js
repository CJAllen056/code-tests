var mongoose = require("mongoose");

var entrySchema = new mongoose.Schema({
  name:         { type: String },
  phone_number: { type: String },
  address:      { type: String }
});

module.exports = mongoose.model("Entry", entrySchema);
