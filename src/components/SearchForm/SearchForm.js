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
        <div>
          <input
            placeholder="Search News"
            type="text"
            value={search}
            onChange={(event) => this.handleChange(event)}
          />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </div>
      </form>
    )
  }
}

export { SearchForm };