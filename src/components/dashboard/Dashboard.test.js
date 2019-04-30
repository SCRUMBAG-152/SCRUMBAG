import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import { Dashboard } from './Dashboard';

describe('Dashboard Component', () => {
  it('should render correctly with props', () => {
    const props = {
        auth: true,
        notifications: true, 
        profile: true
      }
      const wrapper = shallow(<Dashboard {...props} />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
});