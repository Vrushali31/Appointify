import { Outlet, Link } from "react-router-dom";
import React, { useContext, useState, createContext } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { UserContext } from "../index";

import axios from "axios";
//import './login.css'

//const UserContext = createContext()

const Login = () => {
    const navigate = useNavigate();
    const u = useContext(UserContext);
    //console.log(user);
    const user = u.user;
    const setUser = u.setUser;
  // const [loggedInUser, setLoggedInUser] = useState(user);


  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(value);
    console.log(name);
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    console.log(value);
  }

  function validateUser(event) {
    event.preventDefault();
    const newUser = {
      username: input.username,
      password: input.password,
    };
    var name = newUser.username;
    let targetURL = "https://localhost:7299/api/Users/" + name + "/";

    axios
      .get(`${targetURL}`)
      .then((res) => {
        console.log(res);
        //return redirect("/login");
        //navigate("/login");
        //console.log("hi")

        if (res.data.password == input.password) {
          setUser({
            username: res.data.username,
            password: res.data.password,
            organisation: res.data.organisation,
            id: res.data.id,
          });
          navigate("/");
        } else {
            console.log("invalid");
            alert("Invalid Username or password");

          //navigate("/login");
        }
      })
      .catch((err) => {
        console.log("error");
          console.log(err);
          alert("Invalid Username or password");

      });
  }

  return (
    <>
      <section className="">
        {/*<!-- Jumbotron -->*/}
        <div className="px-4 py-5 px-md-5 text-center text-lg-start">
          {/*style="background-color: hsl(0, 0%, 96%)*/}
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  A smart way to <br />
                  <span className="text-primary">schedule your meetings</span>
                </h1>
                <p>
                  {/*style="color: hsl(217, 10%, 50.8%)"*/}
                  {/*Lorem ipsum dolor sit amet consectetur adipisicing elit.*/}
                  {/*Eveniet, itaque accusantium odio, soluta, corrupti aliquam*/}
                  {/*quibusdam tempora at cupiditate quis eum maiores libero*/}
                  {/*veritatis? Dicta facilis sint aliquid ipsum atque?*/}
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <form>
                      {/*<!-- 2 column grid layout with text inputs for the first and last names -->*/}
                      {/*<div className="row">*/}
                      {/*    <div className="col-md-6 mb-4">*/}
                      {/*        <div className="form-outline">*/}
                      {/*            <input type="text" id="form3Example1" className="form-control" />*/}
                      {/*            <label className="form-label" for="form3Example1">First name</label>*/}
                      {/*        </div>*/}
                      {/*    </div>*/}
                      {/*    <div className="col-md-6 mb-4">*/}
                      {/*        <div className="form-outline">*/}
                      {/*            <input type="text" id="form3Example2" className="form-control" />*/}
                      {/*            <label className="form-label" for="form3Example2">Last name</label>*/}
                      {/*        </div>*/}
                      {/*    </div>*/}
                      {/*</div>*/}

                      {/*<!-- Email input -->*/}
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example3"
                          className="form-control"
                          name="username"
                          value={input.username}
                          onChange={handleChange}
                        />
                        <label className="form-label" for="form3Example3">
                          Username
                        </label>
                      </div>

                      {/*<!-- Password input -->*/}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4"
                          className="form-control"
                          name="password"
                          value={input.password}
                          onChange={handleChange}
                        />
                        <label className="form-label" for="form3Example4">
                          Password
                        </label>
                                               
                         
                      </div>

                      {/*<!-- Submit button -->*/}
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                        onClick={validateUser}
                      >
                        Login
                      </button>

                      {/*<!-- Register buttons -->*/}
                      <div className="text-center">
                        <p>Do not have an account?</p>
                        <a className="nav-link">
                          <Link to="/signup">Signup</Link>{" "}
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Jumbotron -->*/}
      </section>
    </>
  );
};

export default Login;
