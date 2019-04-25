import React from 'react';
import styles from './Header.module.css';

console.log(styles)

const Header = () => {
  return (
    <>
      <h1 className={styles.title}>Heres the title</h1>
    </>
  )
}

export default Header;
