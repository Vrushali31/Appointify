import { useState, useContext, useEffect } from 'react';
import './form.css'
import axios from 'axios';
import { UserContext } from "../index";
import { redirect, useNavigate } from "react-router-dom";




const Form = () => {

    const navigate = useNavigate();
    const u = useContext(UserContext);

    const user = u.user;
    console.log(user);
    console.log("hi from form")

    useEffect(() => {
        if (user.username == '') {
            navigate("/login")
        }
    })

    const [input, setInput] = useState({
        date: '',
        time: '',
        details: '',
        status: ''
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]:value
            }
        })
    }

    function addAppointment(event) {
        event.preventDefault();

        const t = "T"
        const t1 = input.date
        const t2 = input.time
        let dateTime=t1.concat(t)
        dateTime=dateTime.concat(t2)
        console.log(dateTime)
        const newAppointment = {
            date: dateTime,
            
            day:"sunday",
            time: dateTime,
            details: input.details,
            status: input.status,
            userID: user.id,
            
        }

        console.log(newAppointment)
       // console.log(user.id)

        console.log(newAppointment.date)
        axios.post('https://localhost:7299/api/Appointments', newAppointment).then(() => {
            console.log("scheduled")
            navigate('/')
        }

        );
    }

    return (
        <div className="container-fluid">



            <form>
                
                <div className="form-group">
                    <label for="date">Date</label>
                    <input type="date" className="form-control" id="date" placeholder="Date" name="date" value={input.date} onChange={handleChange }  />
                </div>

                <br />
                <div className="form-group">
                    <label for="time">Time</label>
                    <input type="time" className="form-control" id="time" placeholder="Time" name="time" value={input.time}  onChange={handleChange} />
                </div>

                <br/>
                <div className="form-group">
                    <label for="details">Details</label>
                    <input type="text" className="form-control" id="details" placeholder="Details" name="details" value={input.details}  onChange={handleChange} />
                </div>

                <br />
                <div className="form-group">
                    <label for="status">Status</label>
                    <input type="text" className="form-control" id="status" placeholder="Status" name="status" value={input.status}  onChange={handleChange} />
                </div>

                <br />
                <button type="submit" className="btn btn-primary" onClick={addAppointment}>Schedule</button>

                
            </form>
          


        </div>
      




    )
   
};


export default Form;