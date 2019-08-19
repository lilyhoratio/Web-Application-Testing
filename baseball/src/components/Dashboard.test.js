import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each' // need this to avoid double rendering of Dashboard
import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        render(<Dashboard />)
    });
    it('strike button', () => {
        let clicked = false
        const { getByText } = render(<Dashboard strike={() => clicked = true} />)
        // getByText('strike') 
        const strikeButton = getByText(/strike/i) // regexp better in case dev alters text on button
        fireEvent.click(strikeButton) // emulates user clicking on the button
        expect(clicked).toBe(true)
    })
    it('strike button - using mock function', () => {
        let clicked = false
        const click = jest.fn() // pass as a prop 
        const { getByText } = render(<Dashboard strike={click} />)
        // getByText('strike') 
        const strikeButton = getByText(/strike/i) // regexp better in case dev alters text on button
        fireEvent.click(strikeButton) // emulates user clicking on the button
        expect(click).toBeCalled()
    })

})