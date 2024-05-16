import { useState } from "react"
import { ResetBtn } from "./ResetBtn"
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri"
import { POSITION_CLASSES } from "../common"
import Markers from "../Markers/Markers"
import { MiniMapBtn } from "./MiniMapBtn"

import "./Panel.scss"

export const Panel = () => {
  const [show, setShow] = useState(false)

  const handleClickToggle = () => {
    setShow(!show)
  }

  return (
    <div className={`panel-container ${POSITION_CLASSES.bottomright}`}>
      <div className="panel-markers-container">
        <div className="panel-markers-title" onClick={handleClickToggle}>
          Saved Markers{" "}
          {show ? (
            <RiArrowUpSLine className="icon" />
          ) : (
            <RiArrowDownSLine className="icon" />
          )}
        </div>
        {show && <Markers />}
        <div className="panel-latest-marker-pos">
          <span className="panel-latest-marker-pos-label">
            {"Latest marker position: [x, x]"}
          </span>
        </div>
      </div>
      <div className="panel-footer-container">
        <ResetBtn />
        <MiniMapBtn />
      </div>
    </div>
  )
}
