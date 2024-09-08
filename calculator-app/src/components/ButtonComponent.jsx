import React from 'react';

function ButtonComponent({ value, className, onClick }) {
  return (
    <button
      className={className}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
}

export default ButtonComponent;