import React, { useState } from "react";
import ReactMapGl from "react-map-gl";

export default function App(){


  // Have state use hooks to declare viewports of vehicles
  const [viewport, setViewport] = useState({
    latitude: -41.294105529785156,
    longitude:  174.7752685546875,
    zoom: 10,
    width: "100vw",
    height: "100vh"
    
  })

    return (
      <>
      <div>
        <ReactMapGl 
        {...viewport} 
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>
          car makers here
        </ReactMapGl>
      </div>
      </>

    );
  }


