import React from 'react';
import { Link } from "react-router-dom";

const SearchCard = (props) => {
    const { id, name, price, room, benefit, link } = props.dt;
    return (
        <Link to={`/${id}`}>
            <div className="d-flex my-4 border p-3">
                <div className="col-5">
                    <img style={{ borderRadius: "1em" }} className="w-100" src={link} alt="" />
                </div>
                <div className="ms-4 col-7">
                    <p className="fw-bold"> {name} </p>
                    <p className="text-secondary">
                        {room}
                        <br />
                        {benefit}
                    </p>
                    <p className="text-dark"> {price}$/Night </p>
                </div>
            </div>
        </Link>
    );
};

export default SearchCard;