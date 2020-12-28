import React from "react"

import "./styles.css"
import PaintedLink from "../../components/PaintedButton"

const Landing = () => {
  return (
    <div id="container">
      <PaintedLink label="About" to="about" />
    </div>
  )
}

export default Landing