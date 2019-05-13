import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Button from './components/Button';
import Crowd from './components/Crowd';

import styles from './App.module.scss';

const App = () => {
  const [ word, setWord ] = useState('');
  const [ showWord, setShowWord ] = useState(false);

  return(
    <div className={styles.container}>
      <Header />
      <Button setWord={setWord} setShowWord={setShowWord} />
      <Crowd showWord={showWord} word={word} />
    </div>
  )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
