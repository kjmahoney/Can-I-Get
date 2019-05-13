import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Word from './components/Word';
import Button from './components/Button';
import getWord from './utils/getRandomWord';

import styles from './App.module.scss';
import audienceImage from './images/audience.svg';

const App = () => {
  const [ word, setWord ] = useState('');
  const [ showWord, setShowWord ] = useState(false);

  function handleWordClick() {
    getWord().then((res) => {
      setWord(res);
      setShowWord(true);
    })
  }

  return(
    <>
    <div className={styles.container}>
      <Header />
      <Button setFunction={handleWordClick} />
      <div className={styles.crowd}>
        <img className={styles.image} src={audienceImage}></img>
        { showWord ?  <Word word={word}></Word> : null }
      </div>
    </div>
    </>
  )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
