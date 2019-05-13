import React from 'react';
import styles from './Word.module.scss';

const Word = props => {
  return (
    <div className={styles.container}>
      <div className={styles.wordcontainer}>
        <h2 className={styles.word}>{ props.word }</h2>
      </div>
    </div>
  )
}

export default Word;
