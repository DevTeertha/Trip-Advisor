import React from 'react';
import { Container } from 'react-bootstrap';
import Booking from '../Booking/Booking';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import Header from '../Header/Header';
import HomeCard from '../HomeCard/HomeCard';
import { bookNow } from '../../redux/actions/Actions';
import { connect } from 'react-redux';

const Home = (props) => {
    const { bookNow, places } = props;
    return (
        <div className="bg-light">
            <Header></Header>
            <Container>
                <section className="row">
                    <div className="col-md-4 mt-5">
                        <Booking></Booking>
                    </div>
                    <div className="col-md-8 mt-5">
                        <h5 className="fw-bold text-secondary">Experiences</h5>
                        <div className="row">
                            {
                                places.experienceData.map((experience,index) => <ExperienceCard key={index} experience={experience}></ExperienceCard>)
                            }
                        </div>
                        <h5 className="fw-bold text-secondary mt-5">Homes</h5>
                        <div className="row">
                            {
                                places.homeData.map((place,index) => <HomeCard bookNow={bookNow} key={index} place={place}></HomeCard>)
                            }
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        places: state.places
    }
}
const mapDispatchToProps = {
    bookNow: bookNow
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);