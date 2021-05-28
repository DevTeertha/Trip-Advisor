import React from 'react';

const HomeCard = (props) => {
    const { bookNow } = props;
    const { id, imgLink, place, title, person } = props.place;
    return (
        <div className="col-md-4">
            <div className={`d-flex justify-content-center`}>
                <div class="card" style={{ width: '18rem' }}>
                    <div class="card-body">
                        <img className="experienceImg" src={imgLink} alt="" />
                        <h6>{place}</h6>
                        <p>{title}</p>
                        <p>{person}</p>
                        <button onClick={()=>bookNow(id)} className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;