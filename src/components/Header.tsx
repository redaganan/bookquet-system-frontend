import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../styles/home.css";
import { Link } from "react-router-dom";

function Header() {
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
            <ShoppingCartIcon style={{ marginLeft: "85px" }} />
          </div>
        </header>
      </div>
    </>
  );
}
export default Header;
