import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import technology from '../../data/technology';
import science from '../../data/science';
import './App.scss';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';

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

export default App;
