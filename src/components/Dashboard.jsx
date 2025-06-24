// src/components/Dashboard.jsx
import React from 'react';

export default function Dashboard({ username, onLogout }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, <strong>{username}</strong>!</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
