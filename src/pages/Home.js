import React from "react";

const Home = () => {
  return (
    <div className="App-container">
      <div
        className="App-content"
        style={{
          background: `url(${"/assets/background.png"})`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      />
    </div>
  );
};

export default Home;
