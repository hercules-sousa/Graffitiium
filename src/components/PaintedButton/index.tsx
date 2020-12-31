import React from "react"

import "./styles.css"
import { PaintedButtonProps } from "./props"

const PaintedButton = ({label}: PaintedButtonProps) => {
  return (
    <button id="painted-button">{label}</button>
  )
}

export default PaintedButton