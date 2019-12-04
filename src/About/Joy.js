import React from 'react';
import styles from './Person.module.css';

const Joy = () => (
  <div>
      <span className={styles.Name}>Joy Z.</span>
        <img className={styles.img}  src="/images/person4.jpeg" alt="Joy Z."/>
      <article className = {styles.article}>
    <div className={styles.Heading}>Leasing Team</div><br/>
      <p className={styles.content}>
      Worked with apartment advertisers on the re-branding of the community
Worked closely with residents that were displaced from their homes due to renovations to find new homes within our community to still generate revenue
Completed daily reports for the Property Manager and Regional Manager to review the progress in regards to leasing and renovation progress
Trained new and current Bonaventure staff with leasing techniques and closing strategies</p>
      </article>
  </div>

);

export default Joy;
