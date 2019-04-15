import React from 'react';
import ReactDOM from 'react-dom';

import App, { Link } from './App';
import { configure, shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// import toJson from 'enzyme-to-json';

describe('<App /> shallow rendering', () => {
    it('h1 contains correct text', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('h1').text()).toBe('Welcome to React');
    });
});
