import { useState } from 'react';

import PropTypes from 'prop-types';

export const Swatch = ({ color }) => {
  const [chosenColor, setChosenColor] = useState(color);

  const handleColorChange = () => {
    chosenColor === 'blue' ? setChosenColor('pink') : setChosenColor('blue');
  };

  console.log('chosenColor:', chosenColor);

  return (
    <>
      <div
        style={{
          backgroundColor: chosenColor,
          width: '60px',
          height: '60px',
          borderRadius: '6px',
        }}
      ></div>
      <hr />
      <div>Current color is: {chosenColor}</div>
      <button onClick={handleColorChange} className='btn btn-primary mt-2'>
        Change to {chosenColor === 'blue' ? 'pink' : 'blue'}
      </button>
    </>
  );
};

Swatch.propTypes = {
  color: PropTypes.string.isRequired,
};
