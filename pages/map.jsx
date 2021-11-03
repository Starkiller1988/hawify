import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ReactMapGL from 'react-map-gl';

export default function map() {

const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: - 75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10
});

    return (
<div>
<Link to="/" className="start">
        Startseite
      </Link>

<div className="viewmap">
<ReactMapGL {...viewport}
mapboxApiAccessToken={process.env.REACT_MAPBOX_API_ACCESS_TOKEN}
>
    markers here
</ReactMapGL>
</div>



</div>
    )
}
