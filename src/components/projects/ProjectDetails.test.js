import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import { ProjectDetails } from './ProjectDetails';


describe('Project Details', () => {
    it('renders without crashing given the required props', () => {
      const props = {
        projectID: [], 
        project: [],
        auth: [], 
        classes: [], 
        cards: [], 
        columns: []
      }
      const wrapper = shallow(<ProjectDetails {...props} />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })
    

