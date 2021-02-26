import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

test('renders without crashing', () => {
  expect(() =>
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    ),
  ).not.toThrow()
})