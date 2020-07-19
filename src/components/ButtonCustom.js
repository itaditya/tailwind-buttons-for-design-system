import React from 'react';

import ButtonBase from './ButtonBase';

function ButtonCustom(props) {
  return (
    <ButtonBase
      {...props}
      className="text-white bg-blue-500 disabled:bg-blue-500 hover:bg-blue-600 active:bg-blue-600 focus:bg-blue-600 shadow-md disabled:shadow-md hover:shadow-lg"
    />
  );
}

export default ButtonCustom;
