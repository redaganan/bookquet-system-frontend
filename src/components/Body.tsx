import "../styles/home.css";
function Body() {
  return (
    <>
      <div className="container">
        <h2>Fresh Flowers for Every Occasion</h2>
        <p>Discover handcrafted bouquets and floral arrangements</p>
        <button>Shop Now</button>
      </div>
      <div className="products">
        <div className="product">
          <img src="bestseller.jpg" alt="Best Sellers" />
          <p>
            <strong>Best Sellers</strong>
          </p>
        </div>
        <div className="product">
          <img src="bundles.jpg" alt="bundles" />
          <p>
            <strong>Bundles</strong>
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
export default Body;
