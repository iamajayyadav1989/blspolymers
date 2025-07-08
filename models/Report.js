const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  year: String,
  title: String,
  fileUrl: String, // saved file URL or path
});

module.exports = mongoose.model("Report", reportSchema);
