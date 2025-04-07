import { Link, useNavigate } from "react-router-dom";
import "../styles/home.css";
function Body() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/collections");
	};

	return (
		<>
			<div className="container">
				<h2>Fresh Flowers for Every Occasion</h2>
				<p>Discover handcrafted bouquets and floral arrangements</p>
				<button onClick={handleClick}>Shop Now</button>
			</div>
			<div className="products">
				<div className="product">
					<Link to="/collections">
						<img src="bestseller.jpg" alt="Best Sellers" />
						<p>
							<strong>Best Sellers</strong>
						</p>
					</Link>
				</div>
				<div className="product">
					<img src="bundles.jpg" alt="bundles" />
					<p>
						<strong>Bundles</strong>
					</p>
				</div>
			</div>
		</>
	);
}
export default Body;
