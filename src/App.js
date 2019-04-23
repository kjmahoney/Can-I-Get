import React from 'react';
import ReactDOM from 'react-dom';

import Word from './Word';
import getWord from './getRandomWord';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: ""
    }
    this.handleGetClick = this.handleGetClick.bind(this);
  }

  handleGetClick() {
    getWord().then((res) => {
      this.setState({
        word: res
      })
    })
  }

  render() {
    return(
      <div>
        <h1>All we need to get started</h1>
        <button onClick={this.handleGetClick}>
          Is a Word
        </button>
        <Word word={this.state.word}></Word>
      </div>
    )
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
