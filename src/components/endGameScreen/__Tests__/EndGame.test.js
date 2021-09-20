import React from 'react'
import ReactDOM from 'react-dom'
import EndGameScreen from '../EndGame'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

test('element can render in the dom without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<EndGameScreen />, div)
})

test('renders button correctly', () => {
  const { getByTestId } = render(<EndGameScreen />)
  expect(getByTestId('title')).toHaveTextContent('You Lost')
  console.log(getByTestId)
})
