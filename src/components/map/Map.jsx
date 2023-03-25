import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import React from "react";
import useStyles from "../../styles/components/map/map";
function CustomMap({ lat, lng, onClick, google }) {
  const mapClasses = useStyles();
  return (
    <div>
      <Map
        google={google}
        style={{ width: "80%", margin: "auto" }}
        className={mapClasses.map}
        zoom={12}
        initialCenter={{
          lat: lat != null ? lat : 25.79600150032032,
          lng: lng != null ? lng : 55.9661597351114,
        }}
        onClick={onClick}
      >
        <Marker position={{ lat: lat, lng: lng }} />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDsC_zRb6eZK5ExpD1LOPefTDZctZ7ULyY",
})(CustomMap);
