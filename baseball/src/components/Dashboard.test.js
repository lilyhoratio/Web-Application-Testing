import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each' // need this to avoid double rendering of Dashboard
import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        render(<Dashboard />)
    });
    it('strike button onclick works', () => {
        let clicked = false
        const { getByText } = render(<Dashboard strike={() => clicked = true} />)
        // getByText('strike') 
        const strikeButton = getByText(/strike/i) // regexp better in case dev alters text on button
        fireEvent.click(strikeButton) // emulates user clicking on the button
        expect(clicked).toBe(true)
    })
    it('strike button on click works - using mock function', () => {
        let clicked = false
        const click = jest.fn() // pass as a prop 
        const { getByText } = render(<Dashboard strike={click} />)
        const strikeButton = getByText(/strike/i)
        fireEvent.click(strikeButton)
        expect(click).toBeCalled()
    })
    it('ball button on click works - using mock function', () => {
        let clicked = false
        const click = jest.fn() // pass as a prop 
        const { getByText } = render(<Dashboard ball={click} />)
        const ballButton = getByText(/ball/i)
        fireEvent.click(ballButton)
        expect(click).toBeCalled()
    })
    it('foul button on click works - using mock function', () => {
        let clicked = false
        const click = jest.fn() // pass as a prop 
        const { getByText } = render(<Dashboard foul={click} />)
        const foulButton = getByText(/foul/i)
        fireEvent.click(foulButton)
        expect(click).toBeCalled()
    })
    it('hit button on click works - using mock function', () => {
        let clicked = false
        const click = jest.fn() // pass as a prop 
        const { getByText } = render(<Dashboard hit={click} />)
        const hitButton = getByText(/hit/i)
        fireEvent.click(hitButton)
        expect(click).toBeCalled()
    })

})