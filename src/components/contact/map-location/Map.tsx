import React, { FC } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';
import './style.css'

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '8px',
  overflow: 'hidden',
}

type MapProps = {
  isLoaded?: boolean;
  onLoad: (map: google.maps.Map) => void;
  onUnmount: () => void;
  markerPosition: { lat: number; lng: number } | null;
}

const Map: FC<MapProps> = ({ isLoaded, onLoad, onUnmount, markerPosition }) => {


  if (!isLoaded) return <div>Loading Map...</div>;

  return <GoogleMap
    mapContainerStyle={containerStyle}
    onLoad={onLoad}
    onUnmount={onUnmount}
    zoom={2}
    options={{
      disableDefaultUI: true,
      keyboardShortcuts: false,
      mapTypeId: "satellite",
    }}
  >
    {markerPosition && <Marker position={markerPosition} />}
  </GoogleMap>
}

export default Map;