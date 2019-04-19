import React from 'react';
import ReactDOM from 'react-dom';

import Word from './Word';
import getRandomWord from './getRandomWord';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: "pineapple"
    }
  }

  componentDidMount() {

  }

  render() {
    console.log('cheesin');
    return(
      <div>
        <h1>All we need to get started</h1>
        <Word word="pineapple"></Word>
      </div>
    )
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
