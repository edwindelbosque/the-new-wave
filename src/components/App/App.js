import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import NewsContainer from '../NewsContainer/NewsContainer';
import './App.scss';
import local from '../../data/local';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: undefined,
      entertainment: undefined,
      health: undefined,
      technology: undefined,
      science: undefined,
      currentTopic: local,
      immutableTopic: local,
    }
  }

  componentDidMount() {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
      .then(response => response.json())
      .then(data => this.setState({
        local: data.local,
        entertainment: data.entertainment,
        health: data.health,
        technology: data.technology,
        science: data.science
      }));
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