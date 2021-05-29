import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import './Booking.css'

import "react-datepicker/dist/react-datepicker.css";
import { searchResult } from '../../redux/actions/Actions';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";

let location;
const Booking = (props) => {
    const { hotels, searchResult } = props;

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const changeHandler = (e) => {
        location = e.target.value;
    }

    return (
        <div>
            <h5>Where do you want to go</h5>
            <div className='form-control mt-4 pb-5'>
                <p className="mt-4">Location</p>
                <div className="from-group" >
                    <input onBlur={changeHandler} type="text" id='location' className="form-control" placeholder='Enter location' name='location' required />
                </div>
                <p className="mt-4">Arrival</p>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                <p className="mt-4">Departure</p>
                <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
                <div className="App mt-4">
                    <Link to="/search">
                        <button onClick={() => searchResult(hotels, location)} className="btn btn-primary w-100">Search</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        hotels: state.hotels
    }
}
const mapDispatchToProps = {
    searchResult: searchResult
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking);