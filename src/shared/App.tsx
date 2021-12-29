import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { PageLayout } from "@src/components/layout";
import { BottomNavigation, SideMenu } from "@src/components/common/mobile";
import { Home, Noti, Star, House, Profile } from "@src/pages";
import { ITimerTime } from "@src/core/interface/timer";
// import for global localization
import "@utils/i18n";
import "@styles/App.scss";

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
			<BottomNavigation />
		</PageLayout>
	);
};

export default App;
