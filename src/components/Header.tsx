import "../styles/home.css";
import { Link } from "react-router-dom";

function Headers() {

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

		
      </header>
    </div>
  </>
  );
}
export default Headers;
