import React from 'react';

import Word from './Word';

import styles from './Crowd.module.scss';

import audienceImage from '../images/audience.svg';

const Crowd = (props) => {
    return (
     <div className={styles.crowd}>
        <img className={styles.image} src={audienceImage}></img>
        { props.showWord ?  <Word word={props.word}></Word> : null }
      </div>
    )
}

export default Crowd;