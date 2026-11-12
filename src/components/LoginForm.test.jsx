import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('shows an error message when the password is wrong', async () => {
  // 1. fake the backend: wrong password scene
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: false,
      json: () => Promise.resolve({ error: 'Invalid email or password' })
    })
  );

  // 2. draw the form
  render(<LoginForm />);

  // 3. type like a user
  fireEvent.change(screen.getByPlaceholderText('Email'), {
    target: { value: 'test@example.com' }
  });
  fireEvent.change(screen.getByPlaceholderText('Password'), {
    target: { value: 'wrongpassword' }
  });

  // 4. click
  fireEvent.click(screen.getByText('Log in'));

  // 5. check: wait for the error to show up
  expect(await screen.findByText('Invalid email or password')).toBeInTheDocument();
});
