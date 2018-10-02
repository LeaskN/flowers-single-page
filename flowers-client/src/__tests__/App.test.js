import React from 'react';
import App from '../App';

import { shallow } from 'enzyme';

describe('Main App', () => {
    it('renders without crashing', () => {
        shallow(<App />);
    });
})