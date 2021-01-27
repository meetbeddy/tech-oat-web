import React from "react";
import LocationPin from "./LocationPin";
import GoogleMapReact from "google-map-react";

const Map = ({ location, zoomLevel }) => {
  return (
    <div>
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDz07I-MnHxj1oqBFl8GV-UlSCW8g-b4xo" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
