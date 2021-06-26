import React from 'react';
import './About.styles.css';


const About = () => {
    return (
        <div className='about'>
            <div className='flex-about'>
                <div className='about-container'>
                    <h5>About</h5>
                    <p className='about-paragraph'>
                        Dragon Feeders is all about selling quality Dubia roaches.
                        Our Dubias are bred and fed with care because
                        we know how important it is to feed your reptiles and/or pets only the healthiest and most nutritious
                        roaches.  The saying goes "You are what you eat", so rest assured your pets will be getting the best quality
                        dubia roaches around.  Thank you for shopping at Dragon Feeders.
                    </p>
                </div>

                <div className='mission-section'>
                    <h5>Mission</h5>
                    <p className='mission-paragraph'>
                        We pride ourselves on our motto "You are what you eat!", and the motto also applies to your reptiles and pets.
                        Here at Dragon Feeders it is our mission to provide you fast shipping, lower prices, and top quality roaches!
                    </p>
                </div>

                <div className="service-section">
                    <h5>Services</h5>
                    <p className='service-paragraph'>
                        Make your dubia roach purchases here online by card or by PayPal!
                        Get fast shipping and free extra roaches with every order!
                        We also include water crystals and our homemade Dubia Chow!


                    </p>
                </div>
            </div>

        </div>
    )
};

export default About;