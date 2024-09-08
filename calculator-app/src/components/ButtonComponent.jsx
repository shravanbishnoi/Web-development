// import React from 'react';

// function ButtonComponent({ value, className, onClick }) {
//   return (
//     <button
//       className={className}
//       onClick={() => onClick(value)}
//     >
//       {value}
//     </button>
//   );
// }

// export default ButtonComponent;
function ButtonComponent({ value, onClick, className }) {
  const handleClick = () => {
    onClick(value);  // Call the passed onClick function with the value prop
  };

  return (
    <button className={className} onClick={handleClick}>
      {value}
    </button>
  );
}

export default ButtonComponent;
