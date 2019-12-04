import React from 'react';
import styles from './ThankYou.module.css';


const ThankYou = () => (
  <div>
  <div>
    <div className={styles.title}>
      <span className={styles.title}></span>
    </div>
      <div className = {styles.article}>
      <img className={styles.img} src="/images/ThankYou.jpg" alt='thankyou'/>

      <div className={styles.container}>
        </div>
        <p> Thank you!</p>
    </div>

  </div>



<div className = {styles.contactInfo}>
Our Location: 401 Ave, Seattle, WA, 98109<br/>
Operation Hours: 9am to 5pm <br/>
Phone Number: (111)123-4567<br/>
  </div>

  </div>
);

export default ThankYou;
