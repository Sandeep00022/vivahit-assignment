import React from "react";
import Signup from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/gallery" element ={<Gallery/>}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
