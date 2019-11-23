import React from 'react';
import './Amentity.css';

const Amentity = () => {
  return (
    <div className = "separtedSection">
      <div className = "gallerySection">
        <div className = "galleryItem"> 
          <img src="/images/lobby1.jpg" alt="lounge" /></div> 
        <div className = "galleryItem"> 
        <img src="/images/club1.jpg" alt="club" /></div> 
        <div className = "galleryItem"> 
          <img src="/images/treehouse1.jpg" alt="treehouse" />
        </div> 
        <div className = "galleryItem"> 
          <img src="/images/fitness1.jpg" alt="fitness" />
        </div>
        <div className = "galleryItem"> 
          <img src="/images/roof1.jpg" alt="roof" />
        </div>
      </div>
      <div className = "linkSection">
        <div className = "linkInnerSection"> 
          <h2> Amenities </h2>
          <div className = "description">
            <p>
              Designed to exude tranquility, weaving in a forested courtyard and a island treehouse, Sitka’s take on apartment living is pure chill.
            </p>  
          </div>
          <div className = "pageNavigation">
            <ul className = "pageNavigationUl">
              <li className = "pageNavigationLi"> Lobby Lounge</li>
              <li className = "pageNavigationLi"> Club Room</li>
              <li className = "pageNavigationLi"> Tree House</li>
              <li className = "pageNavigationLi"> Fitness Center</li>
              <li className = "pageNavigationLi"> RoofTop Garden</li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Amentity;
