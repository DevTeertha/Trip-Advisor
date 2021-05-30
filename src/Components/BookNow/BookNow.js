import React from 'react';
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const BookNow = (props) => {
    const { results } = props;
    const { startDate, endDate } = results.date;

    const { id } = useParams();
    const hotel = results.data.find(ht => ht.id === id);
    const { name, room, price, cleaningFee, serviceFee, link, rule1, rule2, rule3, rule4, description, location } = hotel;


    const dateFormatHandler = (date) => {
        const year = date.getFullYear();
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        const fullDate = day+" "+month+" "+year;
        return fullDate;
    }

    const stDate = dateFormatHandler(startDate);
    const edDate = dateFormatHandler(endDate);
    return (
        <div className="bg-light">
            <div>
                <Header></Header>
            </div>
            <div className="container">
                <div style={{ height: "250px", overflow: "hidden" }} className="cover-img border">
                    <img style={{ height: "100%" }} className="w-100" src={link} alt="" />
                </div>
                <div>
                    <div className="row my-5">
                        <div className="col">
                            <div className="shadow border p-4">
                                <h1 className="fw-bold"> {name} </h1>
                                <p className="text-secondary"> {location} <br /> {room} </p>
                                <hr />
                                <div className="rules-container">
                                    <div className="text-secondary">
                                        <p>
                                            <span className="fw-bold">Entire Home</span>
                                            <br />
                                            <span> {rule1} </span>
                                        </p>
                                        <p>
                                            <span className="fw-bold">Self Check-in</span>
                                            <br />
                                            <span> {rule2} </span>
                                        </p>
                                        <p>
                                            <span className="fw-bold">Sparkling Clean</span>
                                            <br />
                                            <span> {rule3} </span>
                                        </p>
                                        <p>
                                            <span className="fw-bold">Rowdra is a superhost</span>
                                            <br />
                                            <span> {rule4} </span>
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div className="description text-secondary">
                                    <p> {description} </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="border p-4 shadow">
                                <h4 className="text-center fw-bold">Booking Process</h4>
                                <h4 className="fw-bold mt-4"> {price}$/ Night </h4>
                                <p className="my-4">
                                    <span className="fw-bold text-secondary">
                                        Dates
                                    </span>
                                    <br />
                                    <p className="border fs-4 p-3 text-dark">{stDate}  to  {edDate}</p>
                                </p>
                                <p className="my-4">
                                    <span className="fw-bold text-secondary">
                                        Guest
                                    </span>
                                    <br />
                                    <p className="border fs-4 p-3 text-dark"> MAX 5 People </p>
                                </p>
                                <table className="fw-bold">
                                    <tr>
                                        <td style={{width: "95%"}}>Hotel Charge /Night:</td>
                                        <td>{price}$</td>
                                    </tr>
                                    <tr>
                                        <td style={{width: "95%"}}>Cleaning Fee:</td>
                                        <td>{cleaningFee}$</td>
                                    </tr>
                                    <tr style={{borderBottom: "1px solid gray"}}>
                                        <td style={{width: "95%"}}>Service Fee:</td>
                                        <td>{serviceFee}$</td>
                                    </tr>
                                    <tr>
                                        <td style={{width: "95%"}}>Total:</td>
                                        <td> {parseInt(price)+parseInt(cleaningFee)+parseInt(serviceFee)}$ </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className="btn btn-success mt-4 w-100">Book Now</button>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        results: state.results
    }
}

export default connect(mapStateToProps)(BookNow);