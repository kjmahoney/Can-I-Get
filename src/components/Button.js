import React from 'react';
import getWord from '../utils/getRandomWord';
import styles from './Button.module.scss';

const Button = (props) => {

    function handleWordClick() {
        getWord().then((res) => {
          props.setWord(res);
          props.setShowWord(true);
        })
      }

    return (
     <>
        <button className={styles.button} onClick={handleWordClick}>Word</button>
     </>
    )
}

export default Button;