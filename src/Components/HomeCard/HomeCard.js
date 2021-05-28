import React from 'react';

const HomeCard = ({home}) => {
    return (
        <div className="col-md-4">
            <div className={`d-flex justify-content-center`}>
                <div class="card" style={{ width: '18rem' }}>
                    <div class="card-body">
                        <img className="experienceImg" src={home.imgLink} alt="" />
                        <h6>{home.place}</h6>
                        <p>{home.title}</p>
                        <p>{home.person}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;