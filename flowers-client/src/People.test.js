import React from 'react';
import People from '../../src/containers/People'
import { shallow } from 'enzyme';

describe('People Container', () => {
    it('It starts with loading being true', () => {
        const wrapper = shallow(<People />);
        const loadingState = wrapper.state().isLoading
        expect(loadingState).toEqual(true)
    })
})