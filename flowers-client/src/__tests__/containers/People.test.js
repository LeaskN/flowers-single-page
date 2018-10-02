// import 'jsdom-global/register';
import React from 'react';
import People from '../../containers/People';

import { shallow, mount } from 'enzyme';

describe('Main People', () => {
    it('renders without crashing', () => {
        shallow(<People />);
    });

    it('Its people is initally an array of length 8', () => {
        const wrapper = shallow(<People />)
        const peopleState = wrapper.state().people.length
        expect(peopleState).toEqual(8)
    });

    it('Will not have a person at the bottom of the page', () => {
        const wrapper = shallow(<People />)        
        const persons = wrapper.find('Person-in-detail')
        expect(persons.length).toEqual(0)
    });
})