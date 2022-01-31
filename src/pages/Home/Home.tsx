import { FC } from "react";
import styles from "./home.module.scss";
import { PageLayout } from "components/layout";
import { Calendar } from "components/common";

const Home: FC = () => {
	return (
		<PageLayout enablePageTransition>
			<div className={styles.container}>
				<Calendar />
			</div>
		</PageLayout>
	);
};

export default Home;
