import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const Login = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h2>Login</h2>
      <hr />

      <pre aria-label='pre'>{JSON.stringify(user, null, 3)}</pre>

      <button
        className='btn btn-primary'
        aria-label='setUserBtn'
        onClick={() =>
          setUser({ id: 1, name: 'Celeste', email: 'uruguay@noma.com' })
        }
      >
        Set user
      </button>
    </>
  );
};
