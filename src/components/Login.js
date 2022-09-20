import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="card-header">
          <h3>Please Login</h3>
        </div>
        <div className="card-body">
          <form action="">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
              />
            </div>
            <div className="form-group">
              <input type="submit" value="login" className="btn" />
            </div>
            <div className="form-group">
              <span>
                <Link to="/messenger/register">Register Your Account</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
