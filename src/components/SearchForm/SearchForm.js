import React, { Component } from 'react';
import './SearchForm.scss';

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    const { search } = this.state;
    return (
      <form>
        <input
          placeholder="Search News"
          name="searchInput"
          type="text"
          value={search}
          onChange={(event) => this.handleChange(event)}
        />
        <button>
          Search Now
      </button>
      </form>
    )
  }
}

export default SearchForm;