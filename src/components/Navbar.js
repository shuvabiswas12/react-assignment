import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <section id="navBar">
        <nav className="nav">
          <p className="navbar-brand">
            <Link to="/" style={{ textDecoration: "None" }}>
              Crud<span className="secondPart-of--brand">APP</span>
            </Link>
          </p>
          <ul>
            <li className="nav-item">
              <Link to="/users-list">Users list</Link>
            </li>
            <li className="nav-item">
              <Link to="/">Create user</Link>
            </li>
          </ul>
        </nav>
      </section>
      <hr />
    </>
  )
}

export default Navbar
