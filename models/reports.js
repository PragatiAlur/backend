const mongoose = require("mongoose");

const ReportSchema = mongoose.Schema({
  patientId: { type: String, required: true},
  filename: {type: String, required: true,
  },
});

module.exports = mongoose.model("Reports", ReportSchema);
