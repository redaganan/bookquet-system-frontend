import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Headers() {
  const [showCartPanel, setShowCartPanel] = useState(false);

  return (
    <>
      <div>
        <header>
          <h4 style={{ marginRight: "3px", margin: "0" }}>BookQuet.ph</h4>
          {/* <ShoppingCartIcon style={{ marginRight: "8px" }} /> */}
          <nav className="nav-menu">
            <Link to="/">Home</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/about">About Us</Link>
          </nav>

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
					{/* Add cart items here */}
				</div>
			)}
		</div>
      </header>
    </div>
  </>
  );
}
export default Headers;
