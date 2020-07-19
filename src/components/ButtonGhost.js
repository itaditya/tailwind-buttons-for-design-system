import React from 'react';
import cn from "classnames";

import ButtonBase from './ButtonBase';

const mapGhostVariant = {
  primary: `text-primary border-primary
    hover:bg-primary-600 active:bg-primary-700
    focus:bg-primary-700 focus:shadow-outline-primary`,
  danger: `text-danger border-danger
    hover:bg-danger-600 active:bg-danger-700
    focus:bg-danger-700 focus:shadow-outline-danger`
};

function ButtonGhost(props) {
  const { variant = "primary", ...restProps } = props;
  return (
    <ButtonBase
      {...restProps}
      className={cn(
        `border-2 hover:text-white
        disabled:text-black disabled:bg-transparent
        active:text-white focus:text-white`,
        mapGhostVariant[variant]
      )}
    />
  );
}

export default ButtonGhost;
