import React from 'react';

const XBurger = (props) => {
  const {
    isActive,
  } = props;

  return (
    <div className={`cursorPointer xburger${isActive ? " xburger--open" : ""}`}>
      <div className="xburger__bread"></div>
      <div className="xburger__patty"></div>
      <div className="xburger__bread"></div>
    </div>
  );
}

export default XBurger;