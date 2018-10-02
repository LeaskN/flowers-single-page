import React from 'react';
import People from '../../containers/People';

import { shallow } from 'enzyme';

describe('Main People', () => {
    it('renders without crashing', () => {
        shallow(<People />);
    });

    it('Its people is initally an array of length 8', () => {
        const wrapper = shallow(<People />)
        const peopleState = wrapper.state().people.length
        expect(peopleState).toEqual(8)
    });

    // it('Will load a person when a person is clicked', () => {
    //     const wrapper = shallow(<People />)
    //     const person = wrapper.find(<Person />)
    // });
})