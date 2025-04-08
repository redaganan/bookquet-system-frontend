import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

import "../styles/home.css";

function Body() {
	const [showCartPanel, setShowCartPanel] = useState(false);
	const [selectedFlowers, setSelectedFlowers] = useState<
		{ name: string; src: string; price: number }[]
	>([]); // State to store selected flowers

	// Function to handle adding a flower to the array
	const handleFlowerClick = (flower: any) => {
		setSelectedFlowers((prev) => [...prev, flower]);
	};

	console.log(selectedFlowers); // Log the selected flowers to the console

	return (
		<>
			<header>
				{"Collections"}
				<div className="search-bar">
					<ShoppingCartIcon
						style={{ marginLeft: "85px", cursor: "pointer" }}
						onClick={() => setShowCartPanel(true)}
					/>
					{showCartPanel && (
						<div
							style={{
								position: "fixed",
								top: 0,
								right: 0,
								width: "20%",
								height: "100%",
								backgroundColor: "#fff",
								boxShadow: "-2px 0 5px rgba(0,0,0,0.3)",
								zIndex: 1000,
								overflowY: "auto",
							}}
						>
							<button
								style={{
									position: "absolute",
									top: "10px",
									right: "10px",
									cursor: "pointer",
								}}
								onClick={() => setShowCartPanel(false)}
							>
								Close
							</button>
							<h3 style={{ padding: "20px" }}>Your Cart</h3>

							<ul style={{ padding: "20px" }}>
								{selectedFlowers
									.reduce((acc, flower) => {
										const existingFlower = acc.find(
											(f) => f.name === flower.name
										);
										if (existingFlower) {
											existingFlower.quantity += 1;
										} else {
											acc.push({
												...flower,
												quantity: 1,
											});
										}
										return acc;
									}, [] as { name: string; src: string; price: number; quantity: number }[])
									.map((flower, index) => (
										<>
											<li key={index}>{flower.name}</li>x
											{flower.quantity} - ₱{" "}
											{flower.price * flower.quantity}
										</>
									))}
							</ul>
							<h4 style={{ padding: "20px" }}>
								Total: ₱{" "}
								{selectedFlowers.reduce(
									(total, flower) => total + flower.price,
									0
								)}
							</h4>
							<button onClick={() => setSelectedFlowers([])}>
								Clear
							</button>
							<button>Checkout</button>
						</div>
					)}
				</div>
			</header>
			<div className="collections-header">
				<h3>For Anniversary </h3>
			</div>
			<div className="products">
				{[
					{
						src: "../flowers/anniversary/Cherished-Love-Bundle.png",
						name: "Cherished-Love-Bundle",
						price: 3999					},
					{
						src: "../flowers/anniversary/Daffodil.jpg",
						name: "Daffodil",
						price: 999,
					},
					{
						src: "../flowers/anniversary/Lilac.webp",
						name: "Lilac",
						price: 1299,
					},
					{
						src: "../flowers/anniversary/roses.jpg",
						name: "roses",
						price: 1499,
					},
					{
						src: "../flowers/anniversary/Sunflower.jpg",
						name: "Sunflower",
						price: 1700
					},
					{
						src: "../flowers/anniversary/White-roses.jpg",
						name: "White-roses",
						price: 1699,
					},
				].map((product, index) => (
					<div
						className="product"
						key={index}
						onClick={() => handleFlowerClick(product)} // Add click handler
						style={{ cursor: "pointer" }}
					>
						<img src={product.src} alt={product.name} />
						<p>
							<strong>{product.name}</strong>
						</p>
						<p>₱ {product.price}</p>
					</div>
				))}
			</div>
			<h3>For Birthday </h3>
			<div className="products">
				{[
					{
						src: "../flowers/birthday/amalia.webp",
						name: "amalia",
						price: 2080,
					},
					{
						src: "../flowers/birthday/candy-rush.webp",
						name: "candy-rush",
						price: 1999,
					},
					{
						src: "../flowers/birthday/Heather-Birthday-Bundle.webp",
						name: "Heather Birthday Bundle",
						price: 3989,
					},
					{
						src: "../flowers/birthday/Stargazer.jpg",
						name: "Stargazer",
						price: 1499,
					},
				].map((product, index) => (
					<div
						className="product"
						key={index}
						onClick={() => handleFlowerClick(product)} // Add click handler
						style={{ cursor: "pointer" }}
					>
						<img src={product.src} alt={product.name} />
						<p>
							<strong>{product.name}</strong>
						</p>
						<p>₱ {product.price}</p>
					</div>
				))}
			</div>
			<h3>For Funeral </h3>
			<div className="products">
				{[
					{
						src: "../flowers/funeral/deepest-sympathies-funeral-flower-basket.webp",
						name: "deepest sympathies",
						price: 1900
					},
					{
						src: "../flowers/funeral/faith-and-adoration-sympathy-flower.webp",
						name: "Faith and Adoration",
						price: 2800 	 
					},
					{
						src: "../flowers/funeral/rest-in-peace-funeral-condolences-flower-stand.webp",
						name: "Peace flower",
						price: 3000,
					},
					{
						src: "../flowers/funeral/white-condolence-flowers.webp",
						name: "White Condolence",
						price: 3999,
					},
				].map((product, index) => (
					<div
						className="product"
						key={index}
						onClick={() => handleFlowerClick(product)} // Add click handler
						style={{ cursor: "pointer" }}
					>
						<img src={product.src} alt={product.name} />
						<p>
							<strong>{product.name}</strong>
						</p>
						<p>₱ {product.price}</p>
					</div>
				))}
			</div>
		</>
	);
}

export default Body;
