import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    // document.querySelector('input').select();
    // console.log(inputRef);
    inputRef.current.select();
  };

  // If two or more inputs are present, the one with the ref passed last (or with the ref) will be focused

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type='text'
        placeholder='Enter your name'
        className='form-control'
      />
      {/* <input
        ref={inputRef}
        type='email'
        placeholder='Enter your email'
        className='form-control mt-2'
      /> */}
      <button onClick={onClick} className='btn btn-primary mt-2'>
        Set focus
      </button>
    </>
  );
};
