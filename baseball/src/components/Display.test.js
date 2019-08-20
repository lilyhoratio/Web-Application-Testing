import React from 'react';
import { render } from '@testing-library/react'
import Display from './Display'

describe("<Display />", () => {
    it('renders without crashing', () => {
        render(<Display />)
    })
    it('props are passed and working', () => {
        // render() - renders a React element into the DOM and returns utility methods for testing that component
        const display = render(<Display strikes={2} balls={3} />)
        display.getByText(/Strike Count: 2/)
        display.getByText(/Ball Count: 3/)
    })
    it('component is dumb', () => {
        const display = render(<Display strikes={-2} balls={200} />)
        display.getByText(/Strike Count: -2/)
        display.getByText(/Ball Count: 200/)
    })
})
