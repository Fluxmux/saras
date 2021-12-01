import * as React from "react"
import "../styles/stylesheet.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const Map = () => (
  <>
    <div>
        <MapContainer center={[50.87861, 4.70838]} zoom={14} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[50.87861, 4.70838]}>
                <Popup>
                <b>Sara's</b><br></br>
                Bogaardenstraat 24<br></br>
                3000 Leuven
                </Popup>
            </Marker>
        </MapContainer>
    </div>
  </>
)

export default Map