import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Noti, Star, House, Profile } from "@src/pages";
import { PageLayout } from "@src/components/layout";
import "@styles/App.scss";
import { ITimerTime } from "@src/core/interface/timer";

const App = () => {
	const [timerInfo] = useState<ITimerTime>({ hh: 0, mm: 1, ss: 5 });

	return (
		<PageLayout>
			<Routes>
				<Route path="/" element={<Home timerInfo={timerInfo} />} />
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
