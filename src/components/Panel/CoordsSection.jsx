import '../Panel/Panel.scss';

const CoordsSection = () => {

  const getEnteredCoords = () => {
    const inputData = document.getElementsByName("coords-input-box")[0].value;
    console.info(inputData)
  };

  return (
    <div className="coords-sect-container footer-wrapper-item">
      <span className="coords-sect-text">
        Manually enter or paste coordinates here:
      </span>
      <div className="coords-input">
        <input type="text" placeholder="Ex: Lng,Lat" name="coords-input-box" />
      </div>
      <div className="coords-btns">
        <button className="go-to-coords-btn" onClick={getEnteredCoords}>
          Go to coordinates
        </button>
        <button className="add-at-coords-btn">Add marker at coordinates</button>
      </div>
    </div>
  )
};

export default CoordsSection;