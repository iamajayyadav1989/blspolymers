const QualityControl = require("../models/qualityControlModel");
const fs = require("fs");
const path = require("path");

const getQualityControl = async (req, res) => {
  try {
    const qualityControl = await QualityControl.findOne();
    res.status(200).json(qualityControl);
  } catch (error) {
    console.error("❌ Error in getQualityControl:", error);
    res.status(500).json({
      message: "Failed to fetch quality control data",
      error: error.message || error,
    });
  }
};

const updateQualityControl = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;

    const updateData = { title, description };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const updated = await QualityControl.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    res.status(200).json(updated);
  } catch (error) {
    console.error("❌ Error in updateQualityControl:", error);
    res.status(500).json({
      message: "Failed to update quality control data",
      error: error.message || error,
    });
  }
};

module.exports = {
  getQualityControl,
  updateQualityControl,
};
