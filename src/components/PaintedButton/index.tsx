import React from "react"
import { Link } from "react-router-dom"

import "./styles.css"
import { PaintedLinkProps } from "./props"

const PaintedLink = ({label, to}: PaintedLinkProps) => {
  return (
    <Link className="painted-link" to={`/${to}`} >{label}</Link>
  )
}

export default PaintedLink