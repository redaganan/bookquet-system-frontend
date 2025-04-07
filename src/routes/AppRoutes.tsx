import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Collections from "../pages/Collections";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/collections" element={<Collections />} />
					<Route path="/about" element={<AboutUs />} />
				</Routes>
			</Router>
		</>
	);
};

export default AppRoutes;
