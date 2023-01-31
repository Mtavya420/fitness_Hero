import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import AuthContext from "../auth/auth_context";

const Navbar = () => {
  const { isLoggedIn, user } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
        FIT HERO
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"> </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/exercises">
              Exercises
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/videos">
              Videos
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item nav-link">{isLoggedIn && user.email}</li>
          {!isLoggedIn ? (
            <li className="nav-item">
              <Link className="nav-link" to="/Login">
                Login
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
