import { useCallback } from "react";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "../common";
import { useMap } from "react-leaflet";
import { Tooltip } from 'react-tooltip';
import './Panel.scss';

export const ResetBtn = () => {
  const map = useMap();

  const handleResetClick = useCallback(() => {
    map.setView(DEFAULT_CENTER, DEFAULT_ZOOM)
  }, [map]);

  return (
    <div className="reset-btn-container panel-footer-item">
      <button
        className="reset-btn panel-footer-item-btn"
        onClick={handleResetClick}
        data-tooltip-id="reset-btn"
        data-tooltip-content="Reset to starting map position (White House)"
      >
        Reset Position
        <Tooltip id="reset-btn" />
      </button>
    </div>
  )
}
