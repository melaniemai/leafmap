
import { MapContainer, TileLayer } from "react-leaflet";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "../common";
import { Panel } from "../Panel/Panel";
import { MiniMapControl } from "./MiniMapControl";
import LocationMarker from "../Markers/LocationMarker";
import { useState, useEffect, useRef, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";

import './Map.scss';
import "react-toastify/dist/ReactToastify.css";

export const Map = () => {
  const mapRef = useRef(null)
  const markerRef = useRef(null)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsCopied(false)
    }, 1000);

    return () => clearTimeout(timer)
  }, [])

  const handleResetClick = useCallback((e) => {
    e.preventDefault()
    const map = mapRef.current
    if (!map) {
      return
    }

    map.flyTo(DEFAULT_CENTER, 13)
  }, [])

  const handleCoordsCopy = useCallback((e, pos) => {
    e.preventDefault()
    copyTextToClipboard(`${pos}`)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  
  const copyTextToClipboard = async (text) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand("copy", true, text)
    }
  }

  const handleMarkerItemClick = useCallback((e, pos) => {
    e.preventDefault()
    const map = mapRef.current
    if (!map) {
      return
    }

    handleCoordsCopy(e, pos);
    map.flyTo(pos, 13)
    toast.success("Coordinates copied!", {
      position: "bottom-right",
      closeOnClick: true,
      hideProgressBar: true,
      theme: "dark",
    })
  }, [handleCoordsCopy])

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
          <ToastContainer autoClose={1000} />
        </MapContainer>
      </div>
      <div className="sub-wrapper">
        <div className="panel-wrapper">
          <Panel
            ref={mapRef}
            handleResetClick={handleResetClick}
            handleMarkerItemClick={handleMarkerItemClick}
          />
        </div>
      </div>
    </div>
  )
};