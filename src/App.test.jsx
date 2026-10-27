import { render, screen } from '@testing-library/react';
import App from './App';

test('shows empty message when no resources come back', async () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({ json: () => Promise.resolve([]) })
  );

  render(<App />);

  expect(await screen.findByText(/No resources found/)).toBeInTheDocument();
});

test('shows Loading... first, then the empty message', async () => {
  global.fetch = vi.fn(() =>
    Promise.resolve({ json: () => Promise.resolve([]) })
  );

  render(<App />);

  expect(screen.getByText('Loading...')).toBeInTheDocument();
  expect(await screen.findByText(/No resources found/)).toBeInTheDocument();
  expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
});
