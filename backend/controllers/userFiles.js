import userFiles from "../models/userFiles.model.js";
import { errorHandler } from "../utils/error.js";

export const uploadFile = async (req, res, next) => {
  try {
    const { name, size, type, fileUrl } = req.body;

    if (!name || !size || !type || !fileUrl) {
      return next(errorHandler(400, "please provide all the required fields"));
    }

    const uploadedFile = await userFiles.findOne({ name });
    if (uploadFile) {
      return next(errorHandler(409, "the reuested file is already uploaded"));
    }

    const newFile = new userFiles({
      name,
      size,
      type,
      fileUrl,
      createdBy: req.user._id,
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
