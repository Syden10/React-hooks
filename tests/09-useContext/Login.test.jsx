import { act, fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { Login } from '../../src/09-useContext/Login';

describe('<Login /> tests', () => {
  test('should render login component without user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <Login />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('should call setUser when button is clicked', () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <Login />
      </UserContext.Provider>
    );
    // const preTag = screen.getByLabelText('pre');
    // expect(preTag.innerHTML).toBe('null');

    const btnElement = screen.getByLabelText('setUserBtn');
    fireEvent.click(btnElement);
    expect(setUserMock).toHaveBeenCalledWith({
      id: 1,
      name: 'Celeste',
      email: 'uruguay@noma.com',
    });
  });
});
