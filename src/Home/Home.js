import React from 'react';
import './Home.css';
import Form from "../Form/Form";

const Home = () => {
    return (
        <div>
            <div className="home-image">
                <img src="/images/home.jpg" alt="homeImg" />
            </div>
            <div className="home-content">
                <p>
                    <h2>
                        A beautifully designed South Lake Union apartment community
                    inspired by the San Juan Islands: calming, mindful, effortless.
                    </h2> 
               </p>
            </div>
            <div className="home-image1">
                <img src="/images/home1.jpg" alt="homeImg1" />
            </div>
            <div className="home-content1">
                <p>
                    <h2>Our mission is to make you feel at home with top-notch services 
                        and amenities, provide proximity to the city's best nightlife and attractions, 
                        and make day-to-day life easier. 
                    </h2> 
               </p>
            </div>
            <div className="home-image2">
                <img src="/images/home2.jpg" alt="homeImg2" />
            </div>
            <div className = "contactInfo">
                Our Location: 401 Ave, Seattle, WA, 98109<br/>
                Operation Hours: 9am to 5pm <br/>
                Phone Number: (111)123-4567<br/>
            </div>

        </div>
    )
}

export default Home
