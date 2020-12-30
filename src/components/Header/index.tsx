import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as GraffitiiumLogo} from "../../assets/svgs/logo.svg"

import "./styles.css"
import PaintedLink from "../PaintedLink"

const Header = () => {
  return (
    <nav className="container">
      <Link id="link" to="/">
        Graffitiium
        <GraffitiiumLogo id="logo" />
      </Link>
      <div className="buttonContainer">
        <span>
          <PaintedLink label="About" to="about" />
        </span>
        <span>
          <PaintedLink label="Sign Up" to="sign-up" />
        </span>
      </div>
    </nav>
  )
}

export default Header