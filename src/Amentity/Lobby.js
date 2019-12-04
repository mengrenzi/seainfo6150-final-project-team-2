import React from 'react';
import styles from './AmenityDetail.module.css';

const Lobby = () => (
  <div>
      <span className={styles.Name}>Lobby Lounge</span>
      <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img}  src="/images/Lobby1.png" alt="Lobby1"/><br/>
        <img className={styles.img}  src="/images/lobby2.png" alt="Lobby2"/></div>
      <article className = {styles.article}>
    <div className={styles.Heading}>Take a Seat Here</div><br/>
      <p className={styles.content}>
    The one and two bedroom models at Alto Apartments come designed with contemporary details throughout. Come home to an expansive floor plan with a built-in wardrobe, built-in desk and front-loading laundry appliances. Gourmet kitchens feature walnut-finished cabinetry, stainless steel appliances and sleek granite countertops. Extra-large windows provide picture-perfect views of downtown Seattle, WA, as well as other landmarks, including Pike Place Market, the Space Needle or Olympic Mountains. Speak with an Alto Apartments leasing agent for current rent terms and availability.</p>
      </article>
  </div>
</div>

);

export default Lobby;
