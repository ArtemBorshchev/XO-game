import React, { useState } from 'react';

import { checkPasswordValidity } from '../usefullFunctions/checkString';

const LoginForm = ({user, setContent, online, setOnline, isLoginClicked, setIsLoginClicked}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const isValidPassword = checkPasswordValidity(password);

    if (isValidPassword) {
      user.name = username;
      user.isLogin = !user.isLogin;
      setIsLoginClicked(!isLoginClicked);
      setOnline(!online);
      setContent(null);
      } else {
        setPassword('');
        alert("bad password -> read the reason in console");
    }
  };

  return (
    <div className='login-form'>
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

export default LoginForm;

