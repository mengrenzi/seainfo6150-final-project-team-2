import React from 'react';
import styles from './Person.module.css';

const Leina = () => (
  <div>
      <span className={styles.Name}>Leina K.</span>
        <img className={styles.img}  src="/images/person1.jpg" alt="Leina K."/>
      <article className = {styles.article}>
    <div className={styles.Heading}>Community Maneger</div><br/>
      <p className={styles.content}>
      Prepared and filed legal notices for evictions, detailed budget reports, and resident correspondence..
Responsible for accuracy of all prepared leases for both locations in Northeast Philadelphia.
Conducted regular market surveys of the area competition
Met with a diverse group of prospective tenants to show vacant apartments, explain terms of residency, and provide information about local areas, in accordance with fair housing laws.
Interviewed and qualified the eligibility of applicants, processing applications and verifying references and income, adhering to company policies.
Coordinated tenant move-ins, move-outs, and walk-through of spaces.
Received tenant maintenance service requests and processed work orders.</p>
      </article>
  </div>

);

export default Leina;
