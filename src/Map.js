import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

function Map(props) {
  const { position } = props;

  console.log(position);
  return (
    <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100wh' }} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {"Latitude: " + position[0]}
        </Popup>
      </Marker>
      <MapControl position={position} />
    </MapContainer>

  );
}

function MapControl(props) {
  const { position } = props;
  const map = useMap();
  useEffect(() => {
    console.log("panning")
    map.panTo(position);
  }, [position])
}

export default Map;
