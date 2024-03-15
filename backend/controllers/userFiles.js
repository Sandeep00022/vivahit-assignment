import userFiles from "../models/userFiles.model.js";
import { errorHandler } from "../utils/error.js";

export const uploadFile = async (req, res, next) => {
  try {
    const { name, size, type, fileUrl } = req.body;
    console.log(name, size, type, fileUrl);
    if (!name || !size || !type || !fileUrl) {
      return next(errorHandler(400, "please provide all the required fields"));
    }

    const uploadedFile = await userFiles.findOne({ name });
    if (uploadedFile) {
      return next(errorHandler(409, "the reuested file is already uploaded"));
    }

    const newFile = new userFiles({
      name,
      size,
      type,
      fileUrl,
      createdBy: req.user.id,
    });

    newFile.save();
    res.status(201).json({
      success: true,
      message: "file uploaded successfully",
      data: newFile,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserFiles = async (req, res, next) => {
  try {
    const files = await userFiles.find({ createdBy: req.user.id });
    res.status(200).json({
      success: true,
      message: "files fetched successfully",
      data: files,
    });
  } catch (error) {
    next(error);
  }
};
