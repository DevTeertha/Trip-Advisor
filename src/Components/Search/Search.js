import React from 'react';
import { searchResult } from '../../redux/actions/Actions';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import SearchCard from './SearchCard';
import MapView from './MapView';

const Search = (props) => {
    const { results, hotels } = props;
    const { location } = results;

    return (
        <div className="bg-light">
            <div>
                <Header></Header>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="p-4 mt-3 border bg-white">
                            <h5 className="fw-bold">Stay in {location} Division</h5>
                            <div className="mt-4">
                                {
                                    hotels.map((dt, index) => <SearchCard key={index} dt={dt}></SearchCard>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-11 col-lg-6">
                        <div style={{ overflow: "hidden" }} className="map mt-3">
                            <MapView></MapView>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        results: state.results,
        hotels: state.hotels
    }
}
const mapDispatchToProps = {
    searchResult: searchResult
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);