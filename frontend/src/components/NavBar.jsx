/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-success navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <img src="../asset/logo.png" alt="logo" width={200} height={75} />
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/createuser">Signup</Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  )
}
