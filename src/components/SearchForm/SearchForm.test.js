import SearchForm from './SearchForm';
import React from 'react';
import { shallow } from 'enzyme';

describe('SearchForm', () => {

  it('should match the snapshot information passed correctly', () => {
    const wrapper = shallow(
      <SearchForm
        searchNews={jest.fn()}
      />
    )
    expect(wrapper).toMatchSnapshot();
  })
})
