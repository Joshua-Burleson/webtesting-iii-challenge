import React from 'react';
import Display from './display';
import { render, fireEvent, act} from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Display', () => {
    it('Displays "Closed" if closed prop passed', () => {
        const wrapper = render(<Display closed={true} locked={false} />);
        expect(wrapper.baseElement.querySelectorAll('div.display.panel div')[1].textContent).toBe('Closed');
        expect(wrapper.baseElement.querySelectorAll('div.display.panel div')[1].classList.contains('red-led')).toBe(true);
    })
    it('Displays "Closed" if closed prop passed', () => {
        const wrapper = render(<Display closed={true} locked={true} />);
        expect(wrapper.baseElement.querySelectorAll('div.display.panel div')[0].textContent).toBe('Locked');
        expect(wrapper.baseElement.querySelectorAll('div.display.panel div')[0].classList.contains('red-led')).toBe(true);
    })
})