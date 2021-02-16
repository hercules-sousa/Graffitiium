import React from "react";
import { isPropertySignature } from "typescript";

import "./styles.css";
import { LineInputProps } from "./props";

const LineInput = ({ inputType }: LineInputProps) => {
  return <input id="line-input" type={inputType} />;
};

export default LineInput;
