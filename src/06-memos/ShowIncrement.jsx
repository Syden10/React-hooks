// memo example below, will prevent re-rendering when incrementing the counter, note there's also a callback in incrementFather function on CallbackHook.jsx file
// import React from 'react';

export const ShowIncrement = ({ increment }) => {
  console.log('I re-rendered :(');

  return (
    <button
      className='btn btn-primary'
      onClick={() => {
        increment(5);
      }}
    >
      Increment
    </button>
  );
};

// export const ShowIncrement = React.memo(({ increment }) => {
//   console.log('I re-rendered :(');

//   return (
//     <button
//       className='btn btn-primary'
//       onClick={() => {
//         increment(5);
//       }}
//     >
//       Increment
//     </button>
//   );
// });
