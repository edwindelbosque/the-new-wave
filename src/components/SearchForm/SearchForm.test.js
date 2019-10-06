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

  // it('should call method handleSubmit', () => {
  //   const wrapper = shallow(
  //     <SearchForm
  //       searchNews={searchNews}
  //     />
  //   )
  //   // setup
  //   const mockEvent = { preventDefault: jest.fn() };
  //   wrapper.instance().handleSubmit = jest.fn();

  //   // execution
  //   wrapper.instance().handleSubmit =
  // })


  // it('should call searchNews method when handleChange executes', () => {
  //   const wrapper = shallow(
  //     <SearchForm
  //       searchNews={searchNews}
  //     />
  //   )
  //   // setup
  //   const mockEvent = { target: { value: 'A' } };
  //   wrapper.instance().handleChange = jest.fn();

  //   // execution
  //   wrapper.instance().handleChange(mockEvent);

  //   // expectation
  //   expect(wrapper.instance().searchNews).toHaveBeenCalledWith(mockEvent);
  // })

})
