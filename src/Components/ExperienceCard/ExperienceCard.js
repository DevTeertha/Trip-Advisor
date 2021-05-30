import React from 'react';

const ExperienceCard = ({ experience }) => {
    return (
        <div className="col-md-4 mt-3">
            <div className={`d-flex justify-content-center`}>
                <div class="card" style={{ width: '18rem' }}>
                    <div class="card-body">
                        <img className="w-100" src={experience.imgLink} alt="" />
                        <h6 className="mt-3 fw-bold">{experience.place}</h6>
                        <p className="text-secondary">{experience.title}</p>
                        <p className="text-secondary">{experience.person}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;