import React from 'react';
import cn from "classnames";

const mapBaseSize = {
  sm: "h-8 px-3 text-xs",
  base: "h-10 px-4 text-base",
  lg: "h-12 px-5 text-xl"
};

function ButtonBase(props) {
  const { size = "base", className, as = "button", ...restProps } = props;
  const Element = as;
  return (
    <Element
      {...restProps}
      className={cn(
        `flex items-center justify-center rounded whitespace-no-wrap
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:shadow-outline
        transition duration-300`,
        mapBaseSize[size],
        className
      )}
    />
  );
}

export default ButtonBase;
