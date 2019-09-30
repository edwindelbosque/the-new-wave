import React, { Component } from 'react';
import local from '../../data/local';
import './App.scss';
import NewsContainer from '../NewsContainer/NewsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render() {
    const { local } = this.state;
    return (
      <div className="app">
        <NewsContainer newsArticles={local} />
      </div>
    );
  }
}

export default App;
