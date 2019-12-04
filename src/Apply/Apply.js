import React from 'react';
import styles from './Apply.module.css';
import {Link} from "react-router-dom";

const Apply = () => (
    <div className="container">
    <div className={styles.title}>
    <span className={styles.title}>Application Form</span>
    </div>
    <div className={styles.container}>

<div className={styles.row}>
  <form className={styles.form}>
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
      <input type="text" placeholder='Room number' />
    </div>
    <div>
      <input type="text" placeholder='Move in Date' />
    </div>
    <div>
      <input type="text" placeholder='Move out Date' />
    </div>
    <div>
      <input type="text" placeholder='Number of residents' />
    </div>
    <div className={styles.oneRow}>
    <div className={styles.dropDown}> 
        <label htmlFor="state" >State: </label>
        <select name="State" required>
        <option value="none"></option>
          <option value="WA">WA</option>
          <option value="NY">NY</option>
          <option value="MA">MA</option>
        </select>
      </div>
    <div className={styles.dropDown}> 
      <label htmlFor="gender" >Gender: </label>
        <select name="Gender" required>
        <option value="none"></option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="perferNotToSay">perfer not to say</option>
        </select>
    </div>
          <div className={styles.left}>
            <label htmlFor="units">Preferred Units</label>
          </div>
           <div className={styles.checkbox}>
             <p>
               <input type="checkbox" name="Preferred Model"/> Model A
              </p>
              <p>
               <input type="checkbox" name="Preferred Model"/> Model B
              </p>
              <p>
               <input type="checkbox" name="Preferred Model"/> Model C
              </p>
              <p>
               <input type="checkbox" name="Preferred Model"/> Model D
              </p>
            {/* <input type="checkbox" style="vertical-align:middle; margin-top:0;"/>地图 */}
          </div>
     </div>

    <div>
      <button className={styles.button} type="button">
       <Link to={"/thankyou"}>Apply</Link>
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

export default Apply;