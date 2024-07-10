// import React from 'react';
import { useCounter, useFetch } from '../hooks';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {
  const { counter, decrement, increment } = useCounter(1);

  const { data, isLoading, hasError, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  // console.log(data);

  return (
    <>
      <h1>Pokemon info</h1>
      <hr />

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={counter}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}

      {hasError && (
        <>
          <div>{error.code}</div>
          <div>{error.message}</div>
        </>
      )}

      {/* <h2>{data?.name}</h2> */}
      <button
        onClick={() => (counter > 1 ? decrement() : null)}
        className='btn btn-primary mt-2'
      >
        Previous
      </button>
      <button onClick={() => increment()} className='btn btn-primary mt-2'>
        Next
      </button>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  );
};
