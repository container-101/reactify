import React, { FC } from "react";
import { PageTransition, Range, Timer } from "@components/common";
import { ITimerTime } from "@src/core/interface/timer";
import styles from "@styles/pages/home.module.scss";
import { PageLayout } from "@src/components/layout";

interface IHomeProps {
	timerInfo: ITimerTime;
}

const Home: FC<IHomeProps> = ({ timerInfo }) => {
	return (
		<PageLayout>
			<PageTransition>
				<div className={styles.container}>
					<Timer timerInfo={timerInfo} />
				</div>
			</PageTransition>
			{/* <Range /> */}
		</PageLayout>
	);
};

export default Home;
