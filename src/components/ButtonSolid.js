import React from 'react';
import cn from "classnames";

import ButtonBase from './ButtonBase';

const mapSolidVariant = {
  primary: `text-white bg-primary disabled:bg-primary
    hover:bg-primary-600 active:bg-primary-700
    focus:bg-primary-700 focus:shadow-outline-primary`,
  danger: `text-white bg-danger disabled:bg-danger
    hover:bg-danger-600 active:bg-danger-700
    focus:bg-danger-700 focus:shadow-outline-danger`,
  plain: "bg-white focus:shadow-outline"
};

function ButtonSolid(props) {
  const { variant = "primary", ...restProps } = props;
  return (
    <ButtonBase
      {...restProps}
      className={cn(
        "shadow-md disabled:shadow-md hover:shadow-lg",
        mapSolidVariant[variant]
      )}
    />
  );
}

export default ButtonSolid;
