import React from 'react';

import { BtnA } from './streams/styleComponents';



const ButtonCreateStream = React.forwardRef((props, ref) => {
  const onClick = event => {
    event.preventDefault();
    props.navigate();
  };
  return (
    <BtnA ref={ref} onClick={onClick}>
      {props.children}
    </BtnA>
  );
});

export default ButtonCreateStream;
