import React from 'react';
import cn from "classnames";

const mapBaseSize = {
  sm: "h-8 px-3 text-xs",
  base: "h-10 px-4 text-base",
  lg: "h-12 px-5 text-xl"
};

export function ButtonBase(props) {
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

const mapSolidVariant = {
  primary: `text-white bg-primary disabled:bg-primary
    hover:bg-primary-600 active:bg-primary-700
    focus:bg-primary-700 focus:shadow-outline-primary`,
  danger: `text-white bg-danger disabled:bg-danger
    hover:bg-danger-600 active:bg-danger-700
    focus:bg-danger-700 focus:shadow-outline-danger`,
  plain: "bg-white focus:shadow-outline"
};

export function ButtonSolid(props) {
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

const mapGhostVariant = {
  primary: `text-primary border-primary
    hover:bg-primary-600 active:bg-primary-700
    focus:bg-primary-700 focus:shadow-outline-primary`,
  danger: `text-danger border-danger
    hover:bg-danger-600 active:bg-danger-700
    focus:bg-danger-700 focus:shadow-outline-danger`
};

export function ButtonGhost(props) {
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

const mapIconBaseSize = {
  sm: "text-xl",
  base: "text-2xl",
  lg: "text-4xl"
};

export function IconButton(props) {
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
