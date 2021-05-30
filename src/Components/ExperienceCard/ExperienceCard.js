import React from 'react';
import './ExperienceCard.css'

const ExperienceCard = ({ experience }) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className={`d-flex justify-content-center`}>
                <div class="card" style={{ width: '18rem' }}>
                    <div class="card-body">
                        <img className="experienceImg" src={experience.imgLink} alt="" />
                        <h6>{experience.place}</h6>
                        <p>{experience.title}</p>
                        <p>{experience.person}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;