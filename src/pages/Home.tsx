import { Timer } from "@components/common";
import { ITimerTime } from "@src/core/interface/timer";
import React, { FC } from "react";

interface IHomeProps {
  timerInfo: ITimerTime;
}

const Home: FC<IHomeProps> = ({ timerInfo }) => {
  return (
    <>
      {/* <div
        className="App-content"
        style={{
          background: `url(${"/assets/background.png"})`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      /> */}
      <Timer timerInfo={timerInfo} />
    </>
  );
};

export default Home;
