import { Button } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSlice";
import gallery from "../assets/gallery.png"

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/logout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="flex sticky top-0 w-full
     bg-purple-500 font-bold hover:cursor-pointer
     text-white p-3 gap-7 shadow-2xl justify-around items-center border-b-2 "
    >
      <div className="flex gap-5 justify-center items-center">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="gallery">
          <div>Gallery</div>
        </Link>
      </div>
      <div>
        {currentUser ? (
          <Button onClick={handleSignout} gradientDuoTone={"pinkToOrange"}>
            LogOut
          </Button>
        ) : (
            <img className="h-9" src={gallery} alt="" />
        )}
      </div>
    </div>
  );
};

export default Header;
