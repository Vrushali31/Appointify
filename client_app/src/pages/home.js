import { Outlet, Link, useNavigate } from "react-router-dom";
import React, { useContext, useState, createContext, useEffect } from "react";
import { UserContext } from "../index";
import axios from 'axios';
import Card from './card';


import "./home.css";
import App from "../App";

const Home = () => {
    const navigate = useNavigate();




    const u = useContext(UserContext);

    const user = u.user;
    console.log(user);
    console.log("hi");

    


    const [appointments, setAppointments] = useState([]);
    var arr = []

useEffect(() => {
    if (user.username == '') {
        navigate("/login")
    }
        if (user.username != '') {
            var id = user.id;
        }
        let target_URL = 'https://localhost:7299/api/Appointments/' + id + '/';
        axios.get(`${target_URL}`,id).then((docs) => {
            console.log(docs.data)
            console.log("data coming")

            docs.data.map(dt => {
                arr.push(dt)
            })
            console.log(arr)
            arr.sort((a, b) => new Date(a.date) - new Date(b.date));
            console.log(arr)
            setAppointments([...arr])
            console.log(appointments)
        })
    }, [appointments])



    

    var i = 0;
  return (
    <div className="container">
      <br />
      <br />
      <div className="row">




              {appointments.map((item) => {

                      

                      return (
                          <>      <div class="col-3">
                         <Card details={item} /> </div></>)
                  
                  

              })}
          </div>
          {/*{appointments.map((item) => (*/}
          {/*   <> <Card details={item} /> <br/></>*/}
          {/*))}*/}


      </div>
  );

   
    
};

export default Home;
