import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilesFailure,
  getFilesStart,
  getFilesSuccess,
} from "../redux/file/fileSlice";
import GalleryCard from "../components/GalleryCard";

const Gallery = () => {
  const { files } = useSelector((state) => state.file);
  const dispatch = useDispatch();
  console.log("fuiels", files);
  const getFiles = async () => {
    try {
      dispatch(getFilesStart());
      const res = await fetch(`/api/file/Allfiles`);
      const data = await res.json();
      if (!res.ok) {
        dispatch(getFilesFailure(data.error));
      } else {
        console.log(data);
        dispatch(getFilesSuccess(data.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <div>
      <div className="flex justify-center mt-5 gap-4 flex-wrap">
        {files &&
          files.map((file) => (
            <GalleryCard key={file._id} file={file} />
          ))}
      </div>
    </div>
  );
};

export default Gallery;
