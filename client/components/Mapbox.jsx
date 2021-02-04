import React from 'react';
import ReactMapGL, { GeolocateControl, NavigationControl, FullscreenControl } from 'react-map-gl';
import MapMarker from './MapMarker';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN

const navControlStyle = {
    right: 10,
    bottom: 10
};

const fullscreenControlStyle = {
    right: 10,
    top: 10
};

class Mapbox extends React.Component {
    state = {
        viewport: {
            latitude: -41.28664,
            longitude: 174.77557,
            zoom: 12,
            width: '800px',
            height: '500px'
        },
        userLocation: {},
    }

    onViewportChange = (viewport) => {
        this.setState({ viewport });
    }

    onGeolocate = (geoLocation) => {
        this.setState({
            userLocation: geoLocation
        })
    }

    render() {
        return (
            <ReactMapGL
                {...this.state.viewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                onViewportChange={this.onViewportChange}>

                <GeolocateControl
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                    //on page load centre on user
                    auto={true}
                    onGeolocate={this.onGeolocate}
                />

                <NavigationControl style={navControlStyle} />
                <FullscreenControl style={fullscreenControlStyle} on />

                {this.props.vehicleLocations.map((location, i) => (
                    <MapMarker key={`map-marker-${i}`} location={location} />
                ))}
            </ReactMapGL>
        )
    }
}

export default Mapbox;