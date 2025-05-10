import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test("check root classname", () => {
  // render the App component
  render(<BrowserRouter><App /></BrowserRouter>);

  // save the heading in a variable
  const rootElement = screen.getByTestId("app");
  // test assumption
  expect(rootElement).toHaveClass("App");
});