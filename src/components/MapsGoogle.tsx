import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const MapsGoogle = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyB683IGY_W3VaaPmGXA2rGAUKZYVyvsfbA',
      });
      if (!isLoaded) return <div>Loading...</div>;
  return (
    <Map/>
  )
}

export default MapsGoogle
function Map() {
    const center = useMemo(() => ({ lat: -33.9172, lng: 151.23064 }), []);
  
    return (
      <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
      </GoogleMap>
    );
  }