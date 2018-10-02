import React from 'react';
import App from '../App';

import { shallow } from 'enzyme';

describe('Main App', () => {
    it('The full app enders without crashing', () => {
        shallow(<App />);
    });
})