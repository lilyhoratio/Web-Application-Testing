import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect' // adds extra methods to expect
import App from './App';


describe("<App />", () => {
  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  it('renders without crashing', () => {
    render(<App />)
  });

  let appComp;
  let strike, ball, foul, hit;
  let strikeCount, ballCount

  beforeEach(() => {
    appComp = render(<App />)
    let getByText = appComp.getByText;
    strike = getByText(/strike/)
    ball = getByText(/ball/)
    foul = getByText(/foul/)
    hit = getByText(/hit/)
    strikeCount = getByText(/strike count/i)
    ballCount = getByText(/ball count/i)
  })

  it('strikes button initialized at 0', () => {
    expect(strikeCount).toHaveTextContent(/0$/)
  })
  it('strikes - increments strikes on click', () => {
    fireEvent.click(strike)
    fireEvent.click(strike)
    expect(strikeCount).toHaveTextContent(/2$/)
  })
  it('strikes - rolls over on 3rd strike & initializes balls to 0', () => {
    fireEvent.click(strike)
    fireEvent.click(strike)
    fireEvent.click(strike)
    expect(strikeCount).toHaveTextContent(/0$/)
    expect(ballCount).toHaveTextContent(/0$/)
  })

  it('balls - rollsover on 4th and & initializes strikes to 0', () => {
    fireEvent.click(ball)
    fireEvent.click(ball)
    fireEvent.click(ball)
    fireEvent.click(ball)
    expect(strikeCount).toHaveTextContent(/0$/)
    expect(ballCount).toHaveTextContent(/0$/)
  })

  it("foul - doesn't increase strikes past 2", () => {
    fireEvent.click(foul)
    fireEvent.click(foul)
    fireEvent.click(foul)
    expect(strikeCount).toHaveTextContent(/2$/)
  })
  it("hit - resets count of both strikes and balls", () => {
    fireEvent.click(ball)
    fireEvent.click(strike)
    fireEvent.click(hit)
    expect(strikeCount).toHaveTextContent(/0$/)
    expect(ballCount).toHaveTextContent(/0$/)
  })
})