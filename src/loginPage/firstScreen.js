
import React, { useState } from 'react';
import './firstScreen.css'; // קובץ CSS לעיצוב העמוד

function LoginPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', username, password);
  };

  const handleRegister = () => {
    console.log('Registering with:', username, password);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <div className="login-buttons">
        <button onClick={handleLogin} className="login-button">כניסה</button>
        <button onClick={handleRegister} className="register-button">הרשמה</button>
      </div>
    </div>
  );
}

export default LoginPage;

