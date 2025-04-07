import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Collections from "../pages/Collections";
import Contact from "../pages/Contanct";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
		</>
	);
};

export default AppRoutes;
