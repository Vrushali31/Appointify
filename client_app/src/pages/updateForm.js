import { useState, useContext } from 'react';
import './form.css'
import axios from 'axios';
import { UserContext } from "../index";
import { redirect, useNavigate, useLocation} from "react-router-dom";




const UpdateForm = (props) => {

    const location = useLocation()
    const info = location.state;
    console.log(location.state);
    const navigate = useNavigate();
    const u = useContext(UserContext);

    const user = u.user;
    //console.log(user);
    //console.log("hi from form")

    const dateTime = info.date
    var temp = dateTime.split("T")
    const [input, setInput] = useState({
        date: temp[0] ,
        time: temp[1],
        details: info.details,
        status: info.status
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function addAppointment(event) {
        event.preventDefault();

        const t = "T"
        const t1 = input.date
        const t2 = input.time
        let dateTime = t1.concat(t)
        dateTime = dateTime.concat(t2)
        //console.log(dateTime)
        const newAppointment = {
            date: dateTime,

            day: "sunday",
            time: dateTime,
            details: input.details,
            status: input.status,
            userID: user.id,
            id: info.id

        }

        console.log(newAppointment)
         console.log(user.id)

        //console.log(newAppointment.date)
        const id = info.id;
        const targetURL = 'https://localhost:7299/api/Appointments/' + id + '/';
        const obj = {
            id: id,
            appointment: newAppointment
        };
        axios.put(`${targetURL}`, newAppointment).then(() => {
            console.log("updated")
            navigate('/')
        });
    }

    function deleteAppointment(event) {
        event.preventDefault();
        const id = info.id;
        const targetURL = 'https://localhost:7299/api/Appointments/' + id + '/';

        axios.delete(`${targetURL}`, id).then(() => {
            console.log("Deleted")
            navigate('/')
        })

    }

    return (
        <div className="container-fluid">



            <form>

                <div className="form-group">
                    <label for="date">Date</label>
                    <input type="date" className="form-control" id="date" placeholder="Date" name="date" value={input.date} onChange={handleChange} />
                </div>

                <br />
                <div className="form-group">
                    <label for="time">Time</label>
                    <input type="time" className="form-control" id="time" placeholder="Time" name="time" value={input.time} onChange={handleChange} />
                </div>

                <br />
                <div className="form-group">
                    <label for="details">Details</label>
                    <input type="text" className="form-control" id="details" placeholder="Details" name="details" value={input.details} onChange={handleChange} />
                </div>

                <br />
                <div className="form-group">
                    <label for="status">Status</label>
                    <input type="text" className="form-control" id="status" placeholder="Status" name="status" value={input.status} onChange={handleChange} />
                </div>

                <br />
                <button type="submit" className="btn btn-primary" onClick={addAppointment}>Update</button>
                <br/><br/>
                <button type="submit" id="delete"  className="btn btn-primary" onClick={deleteAppointment}>Delete</button>


            </form>



        </div>





    )

};


export default UpdateForm;