import React from 'react';
import { Container } from 'react-bootstrap';
import Booking from '../Booking/Booking';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import Header from '../Header/Header';
import HomeCard from '../HomeCard/HomeCard';
import { experienceData } from '../../FakeData/Database';
import { bookNow } from '../../redux/actions/Actions';
import { connect } from 'react-redux';

const Home = (props) => {
    const { bookNow, places, bookList } = props;
    console.log(bookList)

    return (
        <div>
            <Header></Header>
            <Container>
                <section className="row d-flex mt-5">
                    <div className="col-md-4">
                        <Booking></Booking>
                    </div>
                    <div className="col-md-8">
                        <h5>Experiences</h5>
                        <div className="row">
                            {
                                experienceData.map((experience,index) => <ExperienceCard key={index} experience={experience}></ExperienceCard>)
                            }
                        </div>
                        <h5>Homes</h5>
                        <div className="row">
                            {
                                places.map((place,index) => <HomeCard bookNow={bookNow} key={index} place={place}></HomeCard>)
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
        places: state.places,
        bookList: state.bookList
    }
}
const mapDispatchToProps = {
    bookNow: bookNow
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);