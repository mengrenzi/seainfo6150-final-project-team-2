import React from 'react';
import styles from './AmenityDetail.module.css';

const Garden = () => (
  <div>
      <span className={styles.Name}>RoofTop Garden</span>
      <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img}  src="/images/garden.png" alt="garden"/><br/>
        <img className={styles.img}  src="/images/garden2.png" alt="garden2"/></div>
      <article className = {styles.article}>
    <div className={styles.Heading}>Plant flower here</div><br/>
      <p className={styles.content}>
    This rooftop garden is located on the 7th floor and wraps around three sides of the building. The main building itself has 40 floors and is 156.06 m (512.0 ft) tall.
    The rooftop garden is open from Monday to Friday from 7 am to 5:30 pm and also features free Wi-Fi.</p>
      </article>
  </div>
</div>

);

export default Garden;
