import { render, screen } from '@testing-library/react';
import ResourceCard from './ResourceCard';

test('shows the name and hides phone when phone is null', () => {
  render(<ResourceCard name="Downey Food Pantry" category="food" phone={null} />);
  expect(screen.getByText('Downey Food Pantry')).toBeInTheDocument();
  expect(screen.queryByText(/Phone:/)).not.toBeInTheDocument();
});
