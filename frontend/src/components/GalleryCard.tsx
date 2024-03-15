import React from "react";

const GalleryCard = ({ file }) => {
  const fileType = file.type.split("/")[0].toString();
  return (
    <div className=" shadow-2xl rounded-xl p-3">
      {fileType === "image" ? (
        <img  width={"300px"} height={"300px"} src={file.fileUrl} alt="image" />
      ) : (
        <VideoPlayer videoUrl={file.fileUrl} />
      )}
      
    </div>
  );
};

function VideoPlayer({ videoUrl }) {
  console.log(videoUrl);
  return (
    <div className="video-player w-[300px] h-[300px]">
      <video controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default GalleryCard;
