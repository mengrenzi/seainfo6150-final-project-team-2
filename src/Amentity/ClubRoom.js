import React from 'react';
import styles from './AmenityDetail.module.css';

const ClubRoom = () => (
  <div>
      <span className={styles.Name}>Club Room</span>
      <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img}  src="/images/club1.png" alt="club1"/><br/>
        <img className={styles.img}  src="/images/club2.png" alt="club2"/></div>
      <article className = {styles.article}>
    <div className={styles.Heading}>Enjoy time with friends</div><br/>
      <p className={styles.content}>
    Within the high-rise community of Alto Apartments, modern technology and musically inspired communal spaces create a luxury
     amenity package. Hang out in the glass-enclosed community room with Wi-Fi access, a built-in audio system, a large TV and a state-of-the-art stereo system.
      Take in the view of the Space Needle from the landscaped, rooftop deck with Viking grill stations and a glass fire pit.
      Stay in shape with a high-tech fitness center, or find your Zen with an outdoor yoga studio.</p>
      </article>
  </div>
</div>

);

export default ClubRoom;
