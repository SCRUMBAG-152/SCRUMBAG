import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import { ProjectTabs } from './ProjectTabs';


describe('Project Tabs', () => {
    it('renders without crashing given the required props', () => {
      const props = {
        projectID: [], 
        project: [],
        auth: [], 
        classes: [], 
        cards: [], 
        columns: []
      }
      const wrapper = shallow(<ProjectTabs {...props} />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })
    

