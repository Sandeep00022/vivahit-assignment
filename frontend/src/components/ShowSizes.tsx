import { Button } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

const ShowSizes = () => {
  const { files } = useSelector((state) => state.file);

  let totalSize = 0;
  let totalImageSize = 0;
  let totalVideoSize = 0;

  if (files.length > 0) {
    totalSize = files.reduce((totalSize, file) => totalSize + file.size, 0);
    totalImageSize = files
      .filter((file) => file.type.split("/")[0].toString() === "image")
      .reduce((totalSize, file) => totalSize + file.size, 0);

    totalVideoSize = files
      .filter((file) => file.type.split("/")[0].toString() === "video")
      .reduce((totalSize, file) => totalSize + file.size, 0);
  }

  function formatFileSize(bytes) {
    if (bytes < 1024) {
      return bytes + " bytes";
    } else if (bytes < 1024 * 1024) {
      return (bytes / 1024).toFixed(2) + " KB";
    } else if (bytes < 1024 * 1024 * 1024) {
      return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    } else {
      return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " GB";
    }
  }

  console.log("totalfilter", totalVideoSize);

  return (
    <div>
      <div className="flex flex-wrap gap-3 justify-center mb-9">
        <Button gradientDuoTone={"purpleToPink"} outline>
          Total Size: {formatFileSize(totalSize)}
        </Button>
        <Button gradientDuoTone={"purpleToPink"} outline>
          Total Image Size: {formatFileSize(totalImageSize)}
        </Button>
        <Button gradientDuoTone={"purpleToPink"} outline>
          Total Video Size: {formatFileSize(totalVideoSize)}
        </Button>
      </div>
    </div>
  );
};

export default ShowSizes;
