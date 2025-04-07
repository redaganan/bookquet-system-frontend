import Footer from "../components/Footer";
import Header from "../components/Header";
function Products() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Products</h1>
        <p className="text-lg">Explore our range of products!</p>
      </div>
      <Footer />
    </>
  );
}
export default Products;