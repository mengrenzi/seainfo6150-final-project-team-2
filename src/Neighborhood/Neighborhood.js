import React from 'react';
import './Neighborhood.css';

const Neighborhood = () => {
  return (
    <div className = "separtedSection">
      <div className = "mapSection">
        <div className = "mapItem">
          <img src="/images/map.png" alt="map" />
        </div>
      </div>

      <div className = "linkSection">
        <div className = "linkInnerSection"> 
          <h2> Neighborhood
 </h2>
          <div className = "description">
            <p>
              A day in the life might begin with a hot chocolate doughnut at Ba Bar on the way to work at Amazon. Skip the afternoon meeting and head to MOHAI. Then finish it off with rooftop Rum Royale at mbar.
            </p>  
          </div>
          <div className = "pageNavigation">
            <ul className = "pageNavigationUl">
              <li className = "pageNavigationLi"> Shop</li>
              <li className = "pageNavigationLi"> Club Restaurants</li>
              <li className = "pageNavigationLi"> Coffee</li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Neighborhood;
