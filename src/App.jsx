// src/App.jsx
import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

export default function App() {
  const [page, setPage] = useState("login");
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem("username") || "");

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Flask Auth App</h1>

      {page === "login" && (
        <Login
          switchToRegister={() => setPage("register")}
          onLoginSuccess={(username) => {
            localStorage.setItem("username", username);
            setLoggedInUser(username);
            setPage("dashboard");
          }}
        />
      )}

      {page === "register" && (
        <Register
          switchToLogin={() => setPage("login")}
        />
      )}

      {page === "dashboard" && (
        <Dashboard
          username={loggedInUser}
          onLogout={() => {
            localStorage.removeItem("username");
            setLoggedInUser("");
            setPage("login");
          }}
        />
      )}
    </div>
  );
}
