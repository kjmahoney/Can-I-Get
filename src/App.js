import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Button from './components/Button';
import Crowd from './components/Crowd';

import getWord from './utils/getRandomWord';

import styles from './App.module.scss';

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
      <Crowd showWord={showWord} word={word} />
    </div>
    </>
  )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
