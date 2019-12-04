import React from 'react';
import styles from './AmenityDetail.module.css';

const Fitness = () => (
  <div>
      <span className={styles.Name}>Club Room</span>
      <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img}  src="/images/fitness1.png" alt="fitness1"/><br/>
        <img className={styles.img}  src="/images/fitness2.png" alt="fitness2"/></div>
      <article className = {styles.article}>
    <div className={styles.Heading}>Get fit now</div><br/>
      <p className={styles.content}>
  Capitol Hill’s locally-owned, long-running,
  Mode of Fitness Gym offers a unique location for your workout. Come 'get your sweat on' in our clean and airy 3,000 sq. foot gym.</p>
      </article>
  </div>
</div>

);

export default Fitness;
