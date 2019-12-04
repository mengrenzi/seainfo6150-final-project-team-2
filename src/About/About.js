import React from 'react';
import styles from './About.module.css';
import { Redirect, Link } from "react-router-dom";



const About = () => (
  <div>
    <div className={styles.title}>
      <span className={styles.title}></span>
    </div>
    <div className = {styles.textarea}>
      <article className = {styles.article}>
      <img className={styles.img} src="/images/AboutUs.png" alt='aboutus'/>

      <div className={styles.container}>
      <p><div className={styles.name}> <Link to="/About/Leina">Leina K.</Link></div>
      Community Manager</p>

    <img className={styles.img1} src = {styles.img} src="/images/person1.jpg" alt="Leina K."/>

      <p><div className={styles.name}><Link to="/About/Jason">Jason M.</Link></div>
      Leasing Team</p>
    <img className={styles.img1} src = {styles.img} src="/images/person2.jpg" alt="Jason M."/>


      <p><div className={styles.name}><Link to="/About/Monica">Monica M.</Link></div>
      Leasing Team</p>
      <img className={styles.img1} src = {styles.img} src="/images/person3.jpeg" alt="Monika M."/>

      <p><div className={styles.name}><Link to="/About/Joy">Joy Z.</Link></div>
      Leasing Team</p>
    <img className={styles.img1} src = {styles.img} src="/images/person4.jpeg" alt="Joy Z."/>

    </div>
      </article>
    </div>

  </div>
);

export default About;
