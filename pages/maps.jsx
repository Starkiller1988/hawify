import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Link } from "react-router-dom";
import IMG1 from "../components/images/arrowwhite.png";

const containerStyle = {
  width: "100%",
  height: "760px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAJ14LH4BhVUai87TulG5KDcXXcA6fLo-M",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <>

    <div className="content">
      <Link to="/" className="start">
        <img src={IMG1} alt="arrow" className="arrow" />
      </Link>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
      </div>
    </>
  ) : (
    <></>
  );
}

export default React.memo(Map);
