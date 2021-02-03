import React from 'react';
import ReactMapGL from 'react-map-gl';

import Mevoapi from './Mevo'

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN

class Mapbox extends React.Component {

    //had to convert the react function to class based, left over code for ref
    //   const [viewport, setViewport] = useState({
     //     longitude = 174.77557,
    //     zoom = 10
    //   });

    state = {
        viewport: {
            latitude: -41.28664,
            longitude: 174.77557,
            zoom: 12,
            width: '800px',
            height: '500px'
        }
    }

    viewportChange = (viewport) => {
        this.setState({ viewport });
    }

    render() {
        return (
            <div>
                <ReactMapGL
                    {...this.state.viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    onViewportChange={this.viewportChange}>
                </ReactMapGL>

                {/* <Marker
                key={scrap.id}
                latitude={scrap.latitude}
                longitude={scrap.longitude}>
                </Marker> */}
            </div>
        )
    }
}

export default Mapbox;