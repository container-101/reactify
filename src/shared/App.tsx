import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Noti, Star, House, Profile } from "pages";
import { Header } from "components/common";
import "styles/App.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noti" element={<Noti />} />
        <Route path="/star" element={<Star />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/house" element={<House />} />
      </Routes>
      {/* <MBNavigation /> */}
    </div>
  );
};

export default App;
