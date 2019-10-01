import React, { Component } from 'react';
import local from '../../data/local';
import './App.scss';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';

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
        <Menu />
        <main>
          <NewsContainer newsArticles={local} />
        </main>
      </div>
    );
  }
}

export default App;
