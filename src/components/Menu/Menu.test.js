import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('NewsArticle', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <Menu
        selectNews="method"
        categories="array of categories" key="1"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});