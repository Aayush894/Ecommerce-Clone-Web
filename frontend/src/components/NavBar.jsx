/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NavBar() {

  const navigate = useNavigate() ;

  const handleLogout = () => {
    localStorage.removeItem("authToken"); 
    navigate("/login");
  }

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-success navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <img src="../asset/logo.png" alt="logo" width={100} height={40} />
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-white" to="/">Home</Link>
            </li>

            {(localStorage.getItem("authToken")) ?
              <li className="nav-item">
              <Link className="nav-link fw-bold text-white" to="/">Orders</Link>
              </li>
              : ""
            }

          </ul>
          {(!localStorage.getItem("authToken")) ?
            <div className="d-flex">
            <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
            <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
            </div>
            : 
            <div>
              <Link className = "btn" to="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="mx-3 bi bi-cart" viewBox="0 0 16 16" to="/cart">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
              </Link>

              <div className='btn bg-white text-danger mx-1' onClick={handleLogout}>
                Logout
              </div>
            </div>
          }
        </div>
      </nav>
    </>
  )
}
