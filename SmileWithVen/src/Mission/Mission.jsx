import './Mission.css';

import image2 from '../assets/Images/mission-image1.jpg';

function Mission() {
        return (
            
                <div className='mission-background'>
                    <div className="white"></div>
                    <div className="Green"></div>

                    <div className="mission-container">                                
                        <div className="mission-content">
                            <h1>Our Mission</h1>
                            <p>Smile With Ven is a non-profit volunteer organization dedicated to lifting spirits and spreading smiles. Our programs offer a variety of opportunities for families to meet, relax, and recharge, amidst being challenged by illness, special needs, divorce, or loss.</p>
                        </div>
                        <div className="mission-images1">
                            <img src={image2} alt="About Us" className="about-image" />                
                        </div>
                    </div>
                </div>
            );
}


export default Mission;