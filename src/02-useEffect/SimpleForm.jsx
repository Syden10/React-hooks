import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Nicov',
    email: 'nicov@gmail.com',
  });

  const { username, email } = formState;
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    // console.log({ name, value });
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('useEffect called!');
  }, []);

  useEffect(() => {
    // console.log('formState called!');
  }, [formState]);

  useEffect(() => {
    // console.log('email called!');
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />
      <input
        type='email'
        className='form-control mt-3'
        placeholder='nicov@gmail.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />
      {username === 'Nicov' && <Message />}
    </>
  );
};
