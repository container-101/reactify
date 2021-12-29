import { Timer } from "@components/common";
import { ITimerTime } from "@src/core/interface/timer";
import React, { FC } from "react";
import styles from "@styles/pages/home.module.scss";

interface IHomeProps {
	timerInfo: ITimerTime;
}

const Home: FC<IHomeProps> = ({ timerInfo }) => {
	return (
		<main className={styles.container}>
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
		</main>
	);
};

export default Home;
