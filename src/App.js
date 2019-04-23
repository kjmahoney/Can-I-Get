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
  }

  componentDidMount() {
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
        <Word word={this.state.word}></Word>
      </div>
    )
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
