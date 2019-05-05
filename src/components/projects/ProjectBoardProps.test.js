import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import { ProjectBoard } from './ProjectBoard';

  describe('Project Board Props', () => {
    it('Takes in the Correct Prop Types', () => {
      const props = {
        projectID: [typeof(string)], 
        project: [typeof(string)],
        auth: [typeof(string)], 
        classes: [typeof(string)], 
        cards: [typeof(string)],
        lanes: [typeof(string)], 
        columns: []
      }
      const wrapper = shallow(<ProjectBoard {...props} />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })