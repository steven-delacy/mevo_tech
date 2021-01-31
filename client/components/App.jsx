import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import ReactMapGL from 'react-map-gl';


export default function App() {
  
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN

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
        mapboxApiAccessToken= 'pk.eyJ1Ijoic3RldmVuLWRlbGFjeSIsImEiOiJja2trZ253amUwcmUxMnZtenR4NnM2d2hwIn0.5kUakk3O8f-5pD7sS9Zq7w'
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
      >

      </ReactMapGL>
    </div>
  );
}