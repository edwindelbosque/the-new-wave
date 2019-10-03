import React from 'react';
import NewsContainer from './NewsContainer';
import { shallow } from 'enzyme';

describe('NewsContainer', () => {

  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(
      <NewsContainer
        newsArticles={[{ idea1: 'info' }, { idea2: 'info' }]}
      />
    )
    expect(wrapper).toMatchSnapshot();
  })
})