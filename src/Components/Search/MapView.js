import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoiZGV2dGVlcnRoYSIsImEiOiJja3A5bGxtdnIwbGZ4Mm9ueGlsMmVqeWt4In0.dGC97GvTibAN-mfO3esgOQ'
});

const MapView = () => {
    return (
        <>
            <Map
                style="mapbox://styles/mapbox/streets-v11"
                containerStyle={{
                    height: '75vh',
                    width: '65vw'
                }}
            >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[23.810920238863137, 90.41303228219094]} />
                </Layer>
            </Map>
        </>
    );
};

export default MapView;