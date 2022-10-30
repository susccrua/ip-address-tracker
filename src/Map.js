import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

function Map(props) {
  const { position } = props;
  // const map = useMap();

  // useEffect(() => {
  //   map.setView(position)
  // }, [position, map])

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100wh' }} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
      </Marker>
    </MapContainer>

  );
}

export default Map;
