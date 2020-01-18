import React from 'react';
import Dashboard from './Dashboard';
import { render, fireEvent, act} from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Dashboard', () => {
    // const wrapper = render(<Dashboard />);
it('Gate Starts Open and unlocked', () => {
        const wrapper = render(<Dashboard />);
        expect(wrapper.baseElement).toMatchSnapshot();
    });

it('Shows the controls display', () => {
    const wrapper = render(<Dashboard />);
    expect(wrapper.baseElement.querySelector('.controls').classList.contains('panel')).toBe(true);
    });
});