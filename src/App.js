import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Word from './Word';
import getWord from './getRandomWord';

import styles from './App.module.scss';

const App = () => {
  const [ word, setWord ] = useState('...');

  function handleGetClick() {
    getWord().then((res) => {
      setWord(res);
    })
  }

  return(
    <>
    <div className={styles.container}>
      <Header />
      <button onClick={handleGetClick}>
        Is a Word
      </button>
      <Word word={word}></Word>
    </div>
    </>
  )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
