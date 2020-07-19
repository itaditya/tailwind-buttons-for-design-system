import React from 'react';
import cn from "classnames";

const mapIconBaseSize = {
  sm: "text-xl",
  base: "text-2xl",
  lg: "text-4xl"
};

function IconButton(props) {
  const { size = "base", as = "button", ...restProps } = props;
  const Element = as;
  return (
    <Element
      {...restProps}
      className={cn(
        `flex items-center justify-center p-3 rounded-full
        disabled:bg-transparent hover:bg-gray-300 active:bg-gray-400 focus:bg-gray-400 
        disabled:opacity-50 disabled:cursor-not-allowed 
        focus:outline-none focus:shadow-outline`,
        mapIconBaseSize[size]
      )}
    />
  );
}

export default IconButton;
