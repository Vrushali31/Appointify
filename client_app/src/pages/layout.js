import { Outlet, Link, useNavigate } from "react-router-dom";
import React, { useContext, useState, createContext } from "react";
import "./layout.css";
import { UserContext } from "../index";


const Layout = () => {
    const navigate = useNavigate();
    const u = useContext(UserContext);
    //console.log(user);
    const user = u.user;
    const setUser = u.setUser;

    function logout(event) {
        event.preventDefault();
        setUser({
            username:'',
            password: '',
            organisation: '',
            id: '',
        });
        navigate('/login');
        
    }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/*<a className="navbar-brand" href="#">*/}
        {/*  Navbar*/}
        {/*</a>*/}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <a className="nav-link">
                <Link to="/">Home</Link>{" "}
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link">
                <Link to="/form">Schedule</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                              <button type="submit" id="delete" className="btn btn-light" onClick={logout} >Logout</button>

              </a>
                      </li>

                  </ul>

              </div>
              <h3>{user.username}</h3>

      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
