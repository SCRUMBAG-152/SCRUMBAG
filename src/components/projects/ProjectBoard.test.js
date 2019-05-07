import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import { ProjectBoard } from './ProjectBoard';


describe('Project Board', () => {
    it('renders without crashing given the required props', () => {
      const props = {
        projectID: [], 
        project: [],
        auth: [], 
        classes: [], 
        cards: [], 
        columns: []
      }
      const wrapper = shallow(<ProjectBoard {...props} />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })
