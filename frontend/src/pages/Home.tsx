import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import React, { useEffect, useRef, useState } from "react";
import { app } from "../firebase";
import { Button } from "flowbite-react";

const Home = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUplaodProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageUplaoding, setImageUploading] = useState(false);

  const filePickerRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };

  const uploadImage = async () => {
    // service firebase.storage {
    //   match /b/{bucket}/o {
    //     match /{allPaths=**} {
    //       allow read;
    //       allow write: if
    //        request.resource.size < 2 * 1024 &&
    //        request.resource.contentType.matches('image/.*')
    //     }
    //   }
    // }
    setImageUploading(true);
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUplaodProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError(
          "Could not upload image (File must be less than 2MB)"
        );
        setImageFileUplaodProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);

          setImageUploading(false);
        });
      }
    );
  };

  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  console.log(imageFileUrl);

  return (
    <div className="flex h-screen border border-red-600 justify-center  items-center">
      <div>
        <input
          onChange={handleImageChange}
          ref={filePickerRef}
          //   hidden
          accept="image/*"
          type="file"
        />
         <input
          onChange={handleImageChange}
          ref={filePickerRef}
          //   hidden
          accept="video/*"
          type="file"
        />
        <Button onClick={uploadImage}>Upload</Button>
      </div>
    </div>
  );
};

export default Home;
