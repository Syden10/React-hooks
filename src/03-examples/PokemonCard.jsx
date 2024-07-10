import { useLayoutEffect, useRef, useState } from 'react';

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const imgRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = imgRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [sprites]);

  return (
    <section style={{ height: 200 }}>
      <h2 className='text-capitalize'>
        #{id} - {name}
      </h2>
      <div>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name} ref={imgRef} />
        ))}
      </div>
      <code>{JSON.stringify(boxSize)};</code>
    </section>
  );
};
