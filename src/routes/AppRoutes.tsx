import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Collections from "../pages/Collections";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import Checkout from "../pages/CheckOut";
import Exit from "../pages/Exit";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/collections" element={<Collections />} />
					<Route path="/about" element={<AboutUs />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/exit" element={<Exit />} /> {/* Redirect to Home for any unknown routes */}
				</Routes>
			</Router>
		</>
	);
};

export default AppRoutes;
