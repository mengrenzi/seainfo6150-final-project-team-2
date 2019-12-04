import React from 'react';
import styles from './Person.module.css';

const Jason = () => (
  <div>
      <span className={styles.Name}>Jason M.</span>
        <img className={styles.img}  src="/images/person2.jpg" alt="Jason M."/>
      <article className = {styles.article}>
    <div className={styles.Heading}>Leasing Maneger</div><br/>
      <p className={styles.content}>
      Exceeded goals by meeting a 98% occupancy rate for my portfolio.
Performed detail analysis of target markets and developed successful marketing strategies.
Interacted with diverse populations and provided excellent customer service.
Managed budgets ranging from $5000 to $100,000.</p>
      </article>
  </div>

);

export default Jason;
