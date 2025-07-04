# React & Flask Login-Register App with Dashboard

This is a beginner-friendly fullstack authentication app built using **React** (frontend), **Flask** (backend), and **MySQL** (database). It allows users to **register**, **log in**, and view a **simple dashboard**. Login state is managed using `localStorage`.

## 🚀 Features

- ✅ User Registration with secure password hashing
- 🔐 Login validation with error handling
- 🎯 Dashboard shown after successful login
- 🔁 Logout functionality to clear session
- ⚛️ Modular React components: `Login`, `Register`, `Dashboard`
- 🔄 Frontend-backend communication via REST API
## Link
 [View](https://flask-react-authentication-system.vercel.app)
## 🛠️ Tech Stack

**Frontend:**
- React.js (Hooks, useState, useEffect)
- Fetch API
- localStorage

**Backend:**
- Flask (Python)
- Flask-CORS
- Werkzeug (for password hashing)

**Database:**
- MySQL (XAMPP)

---

## 📁 Project Structure

login/
└──src/
    ├── App.jsx
    └── components/
        ├── Login.jsx
        ├── Register.jsx
        └── Dashboard.jsx
└── app.py

---

## 🧑‍💻 How to Run the Project

### 🔧 Backend Setup (Flask + MySQL)

1. Start MySQL using **XAMPP**.
2. Create a database named `flask_auth`.
3. Run this SQL to create the `users` table:
   ```sql
   CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     username VARCHAR(100) NOT NULL,
     password TEXT NOT NULL
   );
### Install backend dependencies:
    pip install flask flask-cors mysql-connector-python werkzeug

### Run the Flask server:
    python app.py

### 🧩 Frontend Setup (React)
1. Navigate to the login folder:
        cd login

2. Install dependencies:
    npm install

3. Start the React app:
     npm run dev
