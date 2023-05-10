import React from "react";
import sprite from "../images/sprite.svg";

const SpriteIcon = ({ name, width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-${name}`} />
    </svg>
  );
};

export default SpriteIcon;
