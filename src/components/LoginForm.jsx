import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL;

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
      setLoggedIn(false);
      return;
    }

    localStorage.setItem('token', data.token);
    setError('');
    setLoggedIn(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Log in</button>
      {error && <p>{error}</p>}
      {loggedIn && <p>✅ Logged in!</p>}
    </form>
  );
}

export default LoginForm;
