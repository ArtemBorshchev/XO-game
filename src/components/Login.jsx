import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { user } from '../usefullFunctions/user';
import { checkPasswordValidity } from '../usefullFunctions/checkString';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  console.log(username);

  const handleLogin = (e) => {
    e.preventDefault();
    const isValidPassword = checkPasswordValidity(password)
    const passInput = document.getElementById('password');
    user.name = username;
    user.setIsLogin()
    console.log(user)
    isValidPassword ? navigate('/') : passInput.value = ''
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)              
            }}
            required
          />
        </div>
          <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

