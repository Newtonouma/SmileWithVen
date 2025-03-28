import './About.css'

import image1 from '../assets/Images/about-image1.jpg';
import image2 from '../assets/Images/about-image2.jpg';


function About() {
    return (
        <div className='outer-container'>
            
            <div className="about-container">
                
                <div className="about-images1">
                    <img src={image2} alt="About Us" className="about-image" />                
                </div>
                <div className="about-images">
                    <img src={image1} alt="About Us" className="about-image" />
                    <p>Two Years of Making Smiles Out of Faces</p>                
                </div>
                <div className="about-content">
                    <h1>About Us</h1>
                    <p>Welcome to Smile With Ven, where fashion meets elegance! We are dedicated to providing you with the latest trends and styles that redefine your wardrobe. Our collection is designed for comfort and elegance, ensuring you look and feel your best.</p>
                    <p>At Smile With Ven, we believe in the power of fashion to express individuality and confidence. Our team is passionate about curating a selection of clothing that reflects the latest trends while maintaining timeless elegance.</p>
                    <p>Join us on this fashionable journey and discover the perfect outfits for every occasion. Whether you're looking for casual wear or something more sophisticated, we have something special just for you!</p>
                </div>
            </div>
        </div>
    );
}

export default About;