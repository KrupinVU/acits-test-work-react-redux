import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";

function Login() {
  const [user, setUser] = useState({
    name: '',
    password: '',
    error: ''
  });

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name === 'Admin' && user.password === 'Querty!123') {
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      history.push({pathname: '/today'});
    } else {
      setUser({...user, error: 'Введены некорректные данные!'});
    }
  }
  return (
    <>
      {user.error && <Alert variant='warning'>{user.error}</Alert>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            id="username"
            placeholder="Your username, please"
            type="text"
            name="username"
            value={user.name}
            onChange={(e) => setUser({...user, name: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            id="password"
            placeholder="Enter your password"
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
          />
        </div>
        <button type="submit" className="btn btn-primary">Log in</button>
      </form>
    </>
  );
}
export default Login;