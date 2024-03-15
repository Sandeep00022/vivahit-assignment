import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilesFailure,
  getFilesStart,
  getFilesSuccess,
} from "../redux/file/fileSlice";
import GalleryCard from "../components/GalleryCard";
import { Spinner } from "flowbite-react";
import animation from "../assets/animation-2.gif"

const Gallery = () => {
  const { files } = useSelector((state) => state.file);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  console.log("fuiels", files);
  const getFiles = async () => {
    try {
      setLoading(true);
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
    finally{
        setLoading(false)
    }
  };

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
        {
            files.length==0 && (
                <div className="flex flex-col items-center p-3">
                    <img src={animation} alt="" />
                    <h1 className="text-xl font-bold">You Don't have any Image or Video in your Gallery</h1>
                </div>
            )
        }
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center mt-5 gap-4 flex-wrap">
          {files &&
            files.map((file) => <GalleryCard key={file._id} file={file} />)}
        </div>
      )}
    </div>
  );
};

export default Gallery;
