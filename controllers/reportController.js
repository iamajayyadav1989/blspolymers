const Report = require("../models/Report");
const fs = require("fs");

// GET all reports
const getReports = async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch reports", error });
  }
};

// POST a new report
const createReport = async (req, res) => {
  try {
    const { year } = req.body;
    const fileUrl = "/uploads/reports/" + req.file.filename;

    const newReport = new Report({
      year,
      fileUrl,
      createdAt: new Date(),
    });

    await newReport.save();
    res.status(201).json(newReport);
  } catch (error) {
    res.status(500).json({ message: "Failed to create report", error });
  }
};

// DELETE a report
const deleteReport = async (req, res) => {
  try {
    const { id } = req.params;
    await Report.findByIdAndDelete(id);
    res.json({ message: "Report deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete report", error });
  }
};

// reportController.js
const updateReport = async (req, res) => {
  try {
    const { id } = req.params;
    const { year, title } = req.body;

    const updateData = { year, title };

    if (req.file) {
      updateData.fileUrl = "/uploads/reports/" + req.file.filename;

      // Delete old file
      const oldReport = await Report.findById(id);
      if (oldReport?.fileUrl) {
        const oldPath = "public" + oldReport.fileUrl; // correct path
        fs.unlink(oldPath, (err) => {
          if (err) console.log("Failed to delete old file:", err);
        });
      }
    }

    const updatedReport = await Report.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    res.json({ message: "Report updated", report: updatedReport });
  } catch (error) {
    console.error("Update failed:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getReports,
  createReport,
  deleteReport,
  updateReport,
};
