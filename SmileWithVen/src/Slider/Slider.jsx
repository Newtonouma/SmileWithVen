
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

// Import images from the Assets folder
import eagel1 from '../assets/Images/Slider-image1.jpeg';
import parrot1 from '../assets/Images/Slider-image2.jpeg';
import kingfisher2 from '../assets/Images/Slider-image3.jpeg';

const MySlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="slide">
                    <img src={eagel1} alt="Eagle" className="slider-image" />
                    <div className="slider-content">
                        <h1 className="slider-text">SMILE WITH VEN</h1>
                        <p className="slider-description">Discover the latest styles designed for comfort and elegance.</p>
                        <button className="view-more-btn">View More</button>
                    </div>
                </div>
                <div className="slide">
                    <img src={parrot1} alt="Parrot" className="slider-image" />
                    <div className="slider-content">
                        <h1 className="slider-text">SMILE WITH VEN</h1>
                        <p className="slider-description">Elegant and timeless fashion to redefine your wardrobe.</p>
                        <button className="view-more-btn">View More</button>
                    </div>
                </div>
                <div className="slide">
                    <img src={kingfisher2} alt="Kingfisher" className="slider-image" />
                    <div className="slider-content">
                        <h1 className="slider-text">SMILE WITH VEN</h1>
                        <p className="slider-description">Playful and stylish outfits perfect for every adventure.</p>
                        <button className="view-more-btn">View More</button>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default MySlider;
