import React from 'react';
import { Container } from 'react-bootstrap';
import Booking from '../Booking/Booking';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import Header from '../Header/Header';
import HomeCard from '../HomeCard/HomeCard';

const experienceData = [
    {
        imgLink: 'https://i.ibb.co/YfBN87w/Screen-Shot-2017-12-11-at-1-44-40-PM-1-X.png',
        place: 'NIGHTLIFE-NEW YORK',
        title: 'Discover the city party scene',
        person: '$35 per person'
    },
    {
        imgLink: 'https://i.ibb.co/QfjfCmB/7665753c-6de6-4b28-8d13-6bfec32708c1-1-X.png',
        place: 'ENTERTAINMENT-VANCOUVER',
        title: 'Tour with an Enthusiastic Local',
        person: '$3 per person'
    },
    {
        imgLink: 'https://i.ibb.co/2sxVG1M/fc84f11e-bd04-4efb-bc4e-65a2070ce49-1-X.png',
        place: 'PHOTO CLASS-LOS ANGELES',
        title: 'Must have L.A. pictures',
        person: '$39 per person'
    }
];

const homeData = [
    {
        imgLink: 'https://i.ibb.co/HXXkBbm/06bf6fed-original-1-X.png',
        place: 'NIGHTLIFE-NEW YORK',
        title: 'Unique Cob Cottage',
        person: '$128 per person'
    },
    {
        imgLink: 'https://i.ibb.co/9syh2cW/d67-66c050b57c1f-1-X.png',
        place: 'NIGHTLIFE-NEW YORK',
        title: 'The Joshua Tree House',
        person: '$250 per person'
    },
    {
        imgLink: 'https://i.ibb.co/DMJ19yM/089-180b2f6e-original-1-X.png',
        place: 'NIGHTLIFE-NEW YORK',
        title: 'A Pirates Life For Me',
        person: '$209 per person'
    }
]

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <section className="row d-flex align-items-center mt-5">
                    <div className="col-md-4">
                        <Booking></Booking>
                    </div>
                    <div className="col-md-8">
                        <h5>Experiences</h5>
                        <div className="row">
                            {
                                experienceData.map(experience => <ExperienceCard experience={experience}></ExperienceCard>)
                            }
                        </div>
                        <h5>Homes</h5>
                        <div className="row">
                            {
                                homeData.map(home => <HomeCard home={home}></HomeCard>)
                            }
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Home;