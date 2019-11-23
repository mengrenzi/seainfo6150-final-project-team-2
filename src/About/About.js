import React from 'react';
import styles from './About.module.css';

const About = () => (
  <div>
    <div className={styles.title}>
      <span className={styles.title}></span>
    </div>
    <div className = {styles.textarea}>
      <article className = {styles.article}>
      <img className={styles.img} src="/images/AboutUs.png" alt='aboutus'/>

      <div className={styles.container}>
      <p> Leina K.<br/>
      Community Manager</p>

        <p>Jason M.<br/>
      Leasing Team</p>

      <p>  Monika M.<br/>
      Leasing Team</p>

    <p> Joy K.<br/>
      Leasing Team</p></div>
      </article>
    </div>

  </div>
);

export default About;
