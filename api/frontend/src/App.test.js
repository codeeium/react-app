// App.test.js
import { render, screen } from '@testing-library/react';  // Import functions from Testing Library
import App from './App';  // Import the App component

// Test to check if the "learn react" link is in the document
test('renders learn react link', () => {
  render(<App />);  // Render the App component into the virtual DOM
  const linkElement = screen.getByText(/learn react/i);  // Find the link with the text "learn react" (case-insensitive)
  expect(linkElement).toBeInTheDocument();  // Assertion to check if the link is in the DOM
});
