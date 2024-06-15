import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

import pinIcon from "../../assets/images/google-maps-pin.svg";

import "../../pages/contacts/Contacts.css"

const containerStyle = {
  width: "350px",
  height: "350px",
};

const OPTIONS = {
  minZoom: 4,
  maxZoom: 19,
};

const center = {
  lat: 38.77695494831258,
  lng: -9.101429300600826,
};

const MARKER_POSITION = {
  lat: 38.77695494831258,
  lng: -9.101429300600826,
};

function Geolocation() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDc-kI4TC9tM770h7LRYc4ZYBbuMW-Fhwk",
  });

  const [setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="contacts__geolocation-map">
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={OPTIONS}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <>
          <MarkerF position={MARKER_POSITION} icon={pinIcon} />
        </>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(Geolocation);
