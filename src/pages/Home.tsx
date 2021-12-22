import { PageLayout } from "@components/layout";
import React from "react";

const Home = () => {
  return (
    <PageLayout>
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
    </PageLayout>
  );
};

export default Home;
