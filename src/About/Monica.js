import React from 'react';
import styles from './Person.module.css';

const Monica = () => (
  <div>
      <span className={styles.Name}>Monica M.</span>
        <img className={styles.img}  src="/images/person3.jpeg" alt="Monika M."/>
      <article className = {styles.article}>
    <div className={styles.Heading}>Leasing Team</div><br/>
      <p className={styles.content}>
      Completed all monthly marketing plans and strategies.
  Implement creative strategies to increased revenue and secure additional income to improve total "bottom line" revenue numbers.
  Planned and implemented resident functions to improve resident relations</p>
      </article>
  </div>

);

export default Monica;
