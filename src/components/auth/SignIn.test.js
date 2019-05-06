import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
//import configureStore from 'redux-mock-store'; // Smart components

import { SignIn } from './SignIn';




    describe('onClick event', () => {
        it('calls onclick handler', () => {
            const mockOnClick = jest.fn();
            const wrapper = shallow(<SignIn onClick={mockOnClick} label="submit" />);
            

            wrapper.find('button').simulate('click');

            expect(mockOnClick.mock.calls.length).toEqual(0);
        });
    });
