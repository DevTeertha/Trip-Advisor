import React from 'react';

const HomeCard = (props) => {
    const { bookNow } = props;
    const { id, imgLink, place, title, person } = props.place;
    return (
        <div className="col-md-6 col-lg-4">
            <div className={`d-flex justify-content-center`}>
                <div class="card" style={{ width: '18rem' }}>
                    <div class="card-body">
                        <img className="experienceImg" src={imgLink} alt="" />
                        <h6>{place}</h6>
                        <p>{title}</p>
                        <p>{person}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;