import { useState } from "react";

{/* Container for the image gallery */ }



const BodyOfAboutUs = () => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const images = [
            "img_woods_wide.jpg",
            "img_5terre_wide.jpg",
            "img_mountains_wide.jpg",
            "img_lights_wide.jpg",
            "img_nature_wide.jpg",
            "img_snow_wide.jpg",
            "img_snow_wide.jpg",
            "img_snow_wide.jpg",
            "img_snow_wide.jpg",
        ];

        const captions = [
            "The Woods",
            "Cinque Terre",
            "Mountains and fjords",
            "Northern Lights",
            "Nature and sunrise",
            "Snowy Mountains",
            "Snowy Mountains",
            "Snowy Mountains",
            "Snowy Mountains",
        ];

        const plusSlides = (n: number) => {
            setCurrentIndex((prevIndex) => (prevIndex + n + images.length) % images.length);
        };

        const currentSlide = (n: number) => {
            setCurrentIndex(n - 1);
        };

        return (
            <>
                <div className="container">
                    {/* Full-width images with number text */}
                    <div className="mySlides">
                        <div className="numbertext">{currentIndex + 1} / {images.length}</div>
                        <img src={images[currentIndex]} style={{ width: "50%" }} alt={captions[currentIndex]} />
                    </div>

                    {/* Next and previous buttons */}
                    <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
                    <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>

                    {/* Image text */}
                    <div className="caption-container">
                        <p id="caption">{captions[currentIndex]}</p>
                    </div>

                    {/* Thumbnail images */}
                    <div className="row">
                        {images.map((image, index) => (
                            <div className="column" key={index}>
                                <img
                                    className={`demo cursor ${currentIndex === index ? "active" : ""}`}
                                    src={image}
                                    style={{ width: "50%" }}
                                    onClick={() => currentSlide(index + 1)}
                                    alt={captions[index]}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    };



export default BodyOfAboutUs;