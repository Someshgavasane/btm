import React, { useState } from 'react';
import '../Login/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userDetailsObj, setUserDetailsObj] = useState({
    username: '',
    pwd: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e, field) => {
    setUserDetailsObj({ ...userDetailsObj, [field]: e.target.value });
  };

  const handleLogin = () => {
    const validUsers = [
      { username: 'admin', pwd: 'admin' },
      { username: 'somesh', pwd: 'somesh@123' },
    ];

    const isValidUser = validUsers.some(
      (user) =>
        user.username === userDetailsObj.username && user.pwd === userDetailsObj.pwd
    );

    if (isValidUser) {
      sessionStorage.setItem('username', userDetailsObj.username);
      sessionStorage.setItem('password', userDetailsObj.pwd);
      navigate('/dashboard');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="ocrOuterDiv">
      <div className="ocrTextContainer">
        <div className="ocrTxtDiv">
          <h1>Book</h1>
          <h1>Management</h1>
          <h1>Tool</h1>
        </div>
      </div>
      <div className="ocrFormContainer">
        <div className="ocrFormInnerDiv">
          <h1>Login</h1>
          <div className="ocrFieldDiv">
            <label>Username:</label>
            <input
              type="text"
              value={userDetailsObj.username}
              onChange={(e) => handleInputChange(e, 'username')}
            />
          </div>
          <div className="ocrFieldDiv">
            <label>Password:</label>
            <input
              type="password"
              value={userDetailsObj.pwd}
              onChange={(e) => handleInputChange(e, 'pwd')}
            />
          </div>
          <div className="lgnBtnDiv">
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
