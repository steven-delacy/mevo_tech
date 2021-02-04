import * as React from "react"
import { Marker } from "react-map-gl"

/** Marker to display an icon on the mapbox frame */
const MapMarker = (props) => {
    return (
        <Marker
            latitude={Number(props.location.position.latitude)}
            longitude={Number(props.location.position.longitude)}
        >
            <img width={25} src={props.location.iconUrl} />
        </Marker>
    )
}

export default MapMarker;