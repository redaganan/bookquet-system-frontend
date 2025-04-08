import Footer from "../components/Footer";
import Header from "../components/Header";
import BodyOfAboutUs from "../components/BodyOfAboutUs"
const AboutUs = () => {
	return (
		<>

			<Header />
			
			<div>
				<h1>About Us</h1>
				<h5 style={{ 
					textAlign: "center", 
					color: "#555", 
					lineHeight: "1.8", 
					fontSize: "1.1rem", 
					margin: "20px 0", 
					fontFamily: "'Arial', sans-serif" 
				}}>
					Our flower shop is built on a deep passion for floral design and a love for making people smile. 
					What began as a small hobby of crafting simple bouquets at home has grown into a space where creativity 
					and nature come together. Each arrangement is thoughtfully made, inspired by years of hands-on experience 
					and a genuine appreciation for the beauty of flowers. With a focus on quality, care, and personal touch, 
					we aim to provide fresh, handcrafted floral pieces that bring warmth to any occasion.
				</h5>
				<img src="public\rahhh.jpg" />
            <BodyOfAboutUs />
			
			</div>
			<Footer />
		</>
	);
};

export default AboutUs;
