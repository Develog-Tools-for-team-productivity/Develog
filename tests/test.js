import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../src/pages/Dashboard';

test('renders Home Page text', () => {
  render(<Dashboard />);
  const element = screen.getByText(/Home Page/i);
  expect(element).toBeInTheDocument();
});
