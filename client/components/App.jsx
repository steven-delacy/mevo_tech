import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import ReactMapGL, { Marker } from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN

export default function App() {

  const 

  const [viewport, setViewport] = useState({
    latitude: -41.28664,
    longitude: 174.77557,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });


  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
      >


      </ReactMapGL>
    </div>
  );
}