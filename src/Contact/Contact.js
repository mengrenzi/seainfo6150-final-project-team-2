import React from 'react';
import styles from './Contact.module.css';
import {Link} from "react-router-dom";

const Contact = () => (
  <div>
  <div className={styles.title}>
  <span className={styles.title}>Contact Us</span>
  </div>
  <div className={styles.container}>
    <div className={styles.row}>
      <img src="/images/contact.png" alt="logo"/>

    </div>
    <div className={styles.row}>
      <form className={styles.form}>
        <div className={styles.subtitle}>Interested in one of our homes?<br/>
        Get in touch with us!<br/></div>
        <div>
          <input type="text" placeholder='Full Name' />
        </div>
        <div>
          <input type="text" placeholder='E-Mail Address' />
        </div>
        <div>
          <input type="text" placeholder='Phone Number' />
        </div>
        <div>
          <textarea placeholder='...' />
        </div>
        <div>
          <button className={styles.button} type="button">
          <Link to={"/thankyou"}>Submit</Link>
            </button>
        </div>
      </form>
    </div>
  </div>

  <div className = {styles.contactInfo}>
Our Location: 401 Ave, Seattle, WA, 98109<br/>
Operation Hours: 9am to 5pm <br/>
Phone Number: (111)123-4567<br/>
  </div>

  </div>
);

export default Contact;
