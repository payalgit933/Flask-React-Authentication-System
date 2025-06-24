// src/components/Login.jsx
import { useState } from 'react';

const API_URL = "http://localhost:5000";

export default function Login({ switchToRegister, onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      setMessage("Please fill in both fields.");
      return;
    }

    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage(data.message);
      onLoginSuccess(username);
    }
    else {
      setMessage(data.error || "Login failed.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {message && <p>{message}</p>}
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /><br />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <button onClick={switchToRegister}>Register</button></p>
    </div>
  );
}
