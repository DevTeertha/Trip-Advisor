import React from 'react';

const HomeCard = (props) => {
    const { id, imgLink, place, title, person } = props.place;
    return (
        <div className="col-md-4 mt-3">
            <div className={`d-flex justify-content-center`}>
                <div class="card" style={{ width: '18rem' }}>
                    <div class="card-body">
                        <img className="w-100" src={imgLink} alt="" />
                        <h6 className="mt-3 fw-bold">{place}</h6>
                        <p className="text-secondary">{title}</p>
                        <p className="text-secondary">{person}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;