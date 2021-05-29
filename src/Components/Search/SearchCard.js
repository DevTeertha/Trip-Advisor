import React from 'react';

const SearchCard = (props) => {
    const { name, price, room, benefit, link } = props.dt;
    return (
        <div>
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
                    <p className="text-dark"> {price} </p>
                </div>
            </div>
        </div>
    );
};

export default SearchCard;