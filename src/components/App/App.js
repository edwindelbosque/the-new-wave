import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import NewsContainer from '../NewsContainer/NewsContainer';
import './App.scss';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import technology from '../../data/technology';
import science from '../../data/science';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local,
      entertainment,
      health,
      technology,
      science,
      currentTopic: local,
      immutableTopic: local
    }
  }

  searchNews = (searchInput) => {
    const upperSearch = searchInput.toUpperCase();
    this.setState({
      currentTopic: this.state.immutableTopic
        .filter(article => article.headline.toUpperCase().includes(upperSearch))
    })
  }

  selectNews = (topic) => {
    this.setState({
      currentTopic: topic,
      immutableTopic: topic
    })
  }

  render() {
    const { currentTopic } = this.state;
    return (
      <div className="app">
        <Menu
          selectNews={this.selectNews}
          categories={this.state}
        />
        <div>
          <SearchForm
            searchNews={this.searchNews}
          />
          <main>
            <NewsContainer
              newsArticles={currentTopic}
            />
          </main>
        </div>
      </div>
    );
  }
}

export default App;