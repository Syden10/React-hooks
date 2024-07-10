import { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    // console.log('Message mounted');
    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y });
      // console.log(coords);
    };
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      // console.log('Message unmounted');
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>User already exists</h3>
      {JSON.stringify(coords)}
    </>
  );
};
