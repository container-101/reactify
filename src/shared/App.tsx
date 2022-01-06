import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Noti, House, Profile } from "@src/pages";
import { ITimerTime } from "@src/core/interface/timer";
// import for global localization
import "@utils/i18n";
import "@styles/App.scss";

function App() {
	const [timerInfo] = useState<ITimerTime>({ hh: 0, mm: 1, ss: 5 });

	return (
		<main>
			<Routes>
				<Route path="/" element={<Home timerInfo={timerInfo} />} />
				<Route path="/noti" element={<Noti />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/house" element={<House />} />
			</Routes>
		</main>
	);
}

export default App;
