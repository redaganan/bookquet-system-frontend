import SearchIcon from "@mui/icons-material/Search";
import "../styles/home.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
    return (
      <>
      
        <div>
          <header>
              <ShoppingCartIcon style={{ marginRight: "8px" }} />
            <nav className="nav-menu">
              <a href="#">Home</a>
              <a href="#">Shop</a>
              <a href="#">Collections</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </nav>
            
              <div className="search-bar" >
              <SearchIcon style={{ marginRight: "8px" }} />
              <input type="text" placeholder="Search..." style={{ flex: 1 }} />
              </div>
          </header>
        </div>
      </>
    );
}
export default Header;