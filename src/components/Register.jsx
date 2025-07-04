// src/components/Register.jsx
import { useState } from 'react';

const API_URL = "https://ca31f217-957d-4560-969f-a74754e9db92-00-8upq9jmpbpnv.sisko.replit.dev";

export default function Register({ switchToLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    if (!username || !password) {
      setMessage("Please fill in both fields.");
      return;
    }

    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    setMessage(data.message || data.error);
    if (res.ok) {
      setUsername("");
      setPassword("");
      switchToLogin();
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {message && <p>{message}</p>}
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} /><br />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleRegister}>Register</button>
      <p>Already have an account? <button onClick={switchToLogin}>Login</button></p>
    </div>
  );
}
