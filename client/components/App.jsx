import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import ReactMapGL, { Marker } from 'react-map-gl';


export default function App() {

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
        mapboxApiAccessToken='pk.eyJ1Ijoic3RldmVuLWRlbGFjeSIsImEiOiJja2trZ2VoOW8xajh2Mm9ud2RvNGx1eXg4In0.RNdzxrMk75w35M9Nxfyg6g'
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
      >


      </ReactMapGL>
    </div>
  );
}