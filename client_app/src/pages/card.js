import { Outlet, Link } from "react-router-dom";

const Card = ({ details }) => {
    const dateTime = details.date.split("T")


    return (
        <div className="col-sm">
            <div className="card text-white bg-primary mb-3">
                <div className="card-header">{dateTime[0]} <br />{dateTime[1]}</div>
                <div className="card-body">
                    <h5 className="card-title">{details.details}</h5>
                    <p className="card-text">
                        {details.status}
                    </p>
                </div>
                <button type="button" className="btn btn-light">
                    <Link to="/UpdateForm"
                        state={details}
                    >Update</Link>
                </button>
            </div>
        </div>
        )

}
export default Card;