import React from "react";
import { Link } from "react-router-dom";

import "./styles.css"
import PaintedLink from "../PaintedLink"

const Header = () => {
  return (
    <div className="container">
      <Link id="link" to="/">Graffitiium</Link>
      <div className="buttonContainer">
        <span>
          <PaintedLink label="About" to="#" />
        </span>
        <span>
          <PaintedLink label="Sign Up" to="#" />
        </span>
      </div>
    </div>
  )
}

export default Header