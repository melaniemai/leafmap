import { useState } from "react"
import Markers from "../Markers/Markers"
import { ResetBtn } from "./ResetBtn"
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri"

import "./Panel.scss"

export const Panel = () => {
  const [show, setShow] = useState(false)

  const handleClickToggle = () => {
    setShow(!show)
  }

  return (
    <div className="panel-container leaflet-top leaflet-right">
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
      </div>
      <ResetBtn />
    </div>
  )
}
