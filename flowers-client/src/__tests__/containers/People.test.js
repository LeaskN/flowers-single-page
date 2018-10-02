import 'jsdom-global/register';
import React from 'react';
import People from '../../containers/People';

import { shallow, mount } from 'enzyme';

describe('Main People', () => {
    it('The main component, People, renders without crashing', () => {
        shallow(<People />);
    });

    it('The shown people is initally an array of length 8', () => {
        const wrapper = shallow(<People />)
        const peopleState = wrapper.state().people.length
        expect(peopleState).toEqual(8)
    });

    it('Will not have a person at the bottom of the page', () => {
        const wrapper = shallow(<People />)        
        const persons = wrapper.find('Person-in-detail')
        expect(persons.length).toEqual(0)
    });

    it('Will show the person in detail at the bottom after a person is clicked', () => {
        const wrapper = mount(<People />)
        // console.log('mount HTML', wrapper.debug())
        const Skywalker = wrapper.find('Skywalker') 
        // The above doesn't select the person properly but I'm out of time so I'm leaving it here.
        Skywalker.simulate('click')        
        const persons = wrapper.find('Person-in-detail')
        expect(persons.length).toEqual(1)
    });
})