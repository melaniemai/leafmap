import { useState } from 'react';
import '../Panel/Panel.scss';

const CoordsSection = ({ handleMarkerItemClick }) => {

  const getEnteredCoords = () => {
    const input = document.getElementsByName("coords-input-box")[0]?.value;
    return input.split(',');
  };

  const pos = getEnteredCoords();

  return (
    <div className="coords-sect-container footer-wrapper-item">
      <span className="coords-sect-text">
        Manually enter or paste coordinates here:
      </span>
      <div className="coords-input">
        <input type="text" placeholder="Ex: Lng,Lat" name="coords-input-box" />
      </div>
      <div className="coords-btns">
        <button
          className="go-to-coords-btn"
          onClick={(e) => handleMarkerItemClick(e, pos)}
        >
          Go to coordinates
        </button>
      </div>
    </div>
  )
};

export default CoordsSection;