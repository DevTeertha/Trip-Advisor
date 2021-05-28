import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import './Booking.css'

import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'react-bootstrap';

const Booking = () => {

    const [startDate, setStartDate] = useState(new Date());

    const [endDate, setEndDate] = useState(new Date());

    return (
        <div>
            <h5>Where do you want to go</h5>
            <form className='form-control mt-4 pb-5'>
                <p className="mt-4">Location</p>
                <div className="from-group" >
                    <input type="text" id='location' className="form-control" placeholder='Enter location' name='location' required />
                </div>
                <p className="mt-4">Arrival</p>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                <p className="mt-4">Departure</p>
                <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
                <div className='d-flex adult mt-4'>
                    <div>
                        <h4>Adult</h4>
                    </div>
                    <div>
                        &nbsp;&nbsp;<span><b>0</b></span> &nbsp;&nbsp; <Button><h5>-</h5></Button> &nbsp;&nbsp; <Button><h5>+</h5></Button>
                    </div>
                </div>
                <div className='d-flex adult mt-4'>
                    <div>
                        <h4>Child</h4>
                    </div>
                    <div>
                        &nbsp;&nbsp;&nbsp;<span><b>0</b></span> &nbsp;&nbsp; <Button><h5>-</h5></Button> &nbsp;&nbsp; <Button><h5>+</h5></Button>
                    </div>
                </div>
                <div className='d-flex adult mt-4'>
                    <div>
                        <h4>Babies</h4>
                    </div>
                    <div>
                        <span><b>0</b></span> &nbsp;&nbsp; <Button><h5>-</h5></Button> &nbsp;&nbsp; <Button><h5>+</h5></Button>
                    </div>
                </div>
                <div className="App mt-4">
                    <Button>Apply</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button>Search</Button>
                </div>
            </form>
        </div>
    );
};

export default Booking;