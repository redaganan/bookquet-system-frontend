
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../styles/home.css";
import { Link } from "react-router-dom";

function Header() {
	return (
		<>
			<div>
				<header>
					<ShoppingCartIcon style={{ marginRight: "8px" }} />
					<nav className="nav-menu">
                        <Link to="/">Home</Link>
                        <Link to="/products"> Shop</Link>
                        <Link to="/collections">Collections</Link>
						<Link to="/contact">Contact</Link>
					</nav>

					<div className="search-bar">
						<SearchIcon style={{ marginRight: "8px" }} />
						<input
							type="text"
							placeholder="Search..."
							style={{ flex: 1 }}
						/>
					</div>
				</header>
			</div>
		</>
	);
}
export default Header;
