import React, { Component } from 'react';
import { local, entertainment, health, technology, science } from '../../index';
import { Menu, SearchForm, NewsContainer } from '../../index';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      entertainment,
      health,
      technology,
      science,
      currentTopic: local
    }
  }

  selectNews = (topic) => {
    this.setState({
      currentTopic: topic
    })
  }

  render() {
    const { currentTopic } = this.state;
    return (
      <div className="app">
        <Menu
          selectNews={this.selectNews}
          state={this.state}
        />
        <div>
          <SearchForm />
          <main>
            <NewsContainer newsArticles={currentTopic} />
          </main>
        </div>
      </div>
    );
  }
}

export { App };