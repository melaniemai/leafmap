
import { MapContainer, TileLayer } from "react-leaflet";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "../common";
import { Panel } from "../Panel/Panel";
import { useDispatch } from "react-redux";
import { MiniMapControl } from "../Panel/MiniMapControl";
import LocationMarker from "../Markers/LocationMarker";
import { useRef, useCallback } from "react";
import { ResetBtn } from "../Buttons/ResetBtn";
import './Map.scss';

export const Map = () => {
  const dispatch = useDispatch();
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const handleResetClick = useCallback((e) => {
    e.preventDefault();
    const map = mapRef.current;
    if (!map) {
      return;
    };

    map.flyTo(DEFAULT_CENTER, 13);
  }, []);

  return (
    <div className="main-container">
      <div className="map-container">
        <MapContainer
          center={DEFAULT_CENTER}
          zoom={DEFAULT_ZOOM}
          scrollWheelZoom={false}
          className="map"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MiniMapControl position="topright" />
          <LocationMarker ref={markerRef} />
        </MapContainer>
      </div>
      <div className="sub-wrapper">
        <div className="panel-wrapper">
          <Panel ref={mapRef} handleResetClick={handleResetClick} />
        </div>
      </div>
    </div>
  )
};