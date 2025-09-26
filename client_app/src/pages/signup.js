import { Outlet, Link } from "react-router-dom";
import React, { useContext, useState } from 'react'
import { redirect, useNavigate } from "react-router-dom";

import axios from 'axios';



function Signup() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        username: '',
        password: '',
        organisation: '',

    });

    function handleChange(event) {
        const { name, value } = event.target;
        console.log(value);
        console.log(name);
        setInput((prevInput) => {
            return {
                ...prevInput,
                [name]: value
            }
        })
        console.log(value)
    }

    function addUser(event) {
        event.preventDefault();
        const newUser = {
            username: input.username,
            password: input.password,
            organisation: input.organisation,
            appointment:[]

        }
        

        console.log(input.organisation)
        console.log(newUser.username)
        console.log(newUser.organisation)
        axios.post('https://localhost:7299/api/Users', newUser).then(() => {
            console.log("success")
            //return redirect("/login");
            navigate("/login");
            //console.log("hi")

        }).catch((err) => {
            console.log("error");
            console.log(err)
            if (err.code == "ERR_BAD_RESPONSE")
                navigate("/login");

        })
    }

    return (
        <>

            <section className="">
                {/*<!-- Jumbotron -->*/}
                <div className="px-4 py-5 px-md-5 text-center text-lg-start" >
                    {/*style="background-color: hsl(0, 0%, 96%)*/}
                    <div className="container">
                        <div className="row gx-lg-5 align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-5 display-3 fw-bold ls-tight">
                                    A smart way to <br />
                                    <span className="text-primary">schedule your meetings</span>
                                </h1>
                                <p >
                                    {/*style="color: hsl(217, 10%, 50.8%)"*/}
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                                    quibusdam tempora at cupiditate quis eum maiores libero
                                    veritatis? Dicta facilis sint aliquid ipsum atque?
                                </p>
                            </div>

                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="card">
                                    <div className="card-body py-5 px-md-5">
                                        <form>
                                            {/*<!-- 2 column grid layout with text inputs for the first and last names -->*/}
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1" className="form-control" name="username" value={input.username} onChange={handleChange} />
                                                        <label className="form-label" for="form3Example1"  >Username</label>
                                                    </div>
                                                </div>
                                                {/*<div className="col-md-6 mb-4">*/}
                                                {/*    <div className="form-outline">*/}
                                                {/*        <input type="text" id="form3Example2" className="form-control" />*/}
                                                {/*        <label className="form-label" for="form3Example2">Last name</label>*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3" className="form-control" name="organisation" value={input.organisation}  onChange={handleChange} />
                                                <label className="form-label" for="form3Example3" >Organisation</label>
                                            </div>

                                            {/*<!-- Email input -->*/}
                                            {/*<div className="form-outline mb-4">*/}
                                            {/*    <input type="email" id="form3Example3" className="form-control" />*/}
                                            {/*    <label className="form-label" for="form3Example3">Email address</label>*/}
                                            {/*</div>*/}

                                            {/*<!-- Password input -->*/}
                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4" className="form-control" name="password" value={input.password}  onChange={handleChange} />
                                                <label className="form-label" for="form3Example4" >Password</label>
                                            </div>

                                            

                                            {/*<!-- Submit button -->*/}
                                            <button type="submit" className="btn btn-primary btn-block mb-4" onClick={addUser }>
                                                Sign up
                                            </button>

                                            {/*<!-- Register buttons -->*/}
                                            <div className="text-center">
                                                <Link to='/login'>Login</Link>
                                                <br/>
                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-facebook-f"></i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-google"></i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-twitter"></i>
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-github"></i>
                                                </button>
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
    )

}
export default Signup;