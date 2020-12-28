import React from "react"
import { Link } from "react-router-dom"

import "./styles.css"

interface PaintedLinkProps {
  label: string
  to: string
}

const PaintedLink = ({label, to}: PaintedLinkProps) => {
  return (
    <Link className="painted-link" to={`/${to}`} >{label}</Link>
  )
}

export default PaintedLink