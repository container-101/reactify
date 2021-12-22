import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Noti, Star, House, Profile } from "@src/pages";
import { PageLayout } from "@src/components/layout";
import "@styles/App.scss";

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noti" element={<Noti />} />
        <Route path="/star" element={<Star />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/house" element={<House />} />
      </Routes>
      {/* <MBNavigation /> */}
    </PageLayout>
  );
};

export default App;
