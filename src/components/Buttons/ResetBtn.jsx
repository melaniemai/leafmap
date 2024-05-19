import { Tooltip } from 'react-tooltip';
import '../Panel/Panel.scss';

export const ResetBtn = ({ handleResetClick }) => {

  return (
    <div className="reset-btn-container footer-wrapper-item">
      <button
        type="text"
        className="reset-btn panel-footer-item-btn"
        onClick={(e) => handleResetClick(e)}
        data-tooltip-id="reset-btn"
        data-tooltip-content="Reset to starting map position (White House)"
      >
        Reset Position
        <Tooltip id="reset-btn" place={'top'} />
      </button>
    </div>
  )
}
