import React from 'react';
import Controls from './Controls';
import { render, fireEvent, act} from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Controls', () => {
    it('Has 2 Buttons To Toggle State', () => {
        const wrapper = render(<Controls />);
        expect(wrapper.baseElement.querySelectorAll('div.controls.panel button').length).toEqual(2);
    });

    it('Toggles Button Closed and Locked states', () => {
        const mockToggleClosed = jest.fn()
        const mockToggleLocked = jest.fn();

        const wrapper = render(<Controls locked={false} closed={false} toggleLocked = {mockToggleLocked} toggleClosed={mockToggleClosed}/>);
        let closeOpenBtn = wrapper.baseElement.querySelectorAll('.toggle-btn')[1];
        let lockUnlockBtn = wrapper.baseElement.querySelectorAll('.toggle-btn')[0];

        expect(closeOpenBtn.textContent).toBe('Close Gate');
        expect(lockUnlockBtn.textContent).toBe('Lock Gate');
    });
});