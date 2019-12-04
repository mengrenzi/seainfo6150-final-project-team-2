import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.error}>
      <img className={styles.img} src="/images/404.png" alt='404'/>
      <p className={styles.errorHead}>404
        <br/>PAGE NOT FOUND</p>
      <p className={styles.errorTip}>Oops! That page can't be found
<br/>
Go back,or head over to www.sitka.com to choose a new direction.
      </p>

    </div>
  )
}

export default NotFound
