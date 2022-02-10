import { Route, Routes } from "react-router-dom";
import { Home, Profile } from "pages";

function App() {
	return (
		<main>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</main>
	);
}

export default App;
