import SearchForm from './SearchForm';
import React from 'react';
import { shallow } from 'enzyme';

describe('SearchForm', () => {
  const searchNews = jest.fn();

  it('should match the snapshot information passed correctly', () => {
    const wrapper = shallow(
      <SearchForm
        searchNews={searchNews}
      />
    )
    expect(wrapper).toMatchSnapshot();
  })

  it('should call the method prop when onChange', () => {
    const wrapper = shallow(
      <SearchForm
        searchNews={searchNews}
      />
    )
    const mockInput = { target: { value: 'A' } };

    wrapper.find('input').simulate('change', mockInput);
    expect(searchNews).toHaveBeenCalled();
  })

})
