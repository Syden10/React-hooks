import { render, screen } from '@testing-library/react';
import { Home } from '../../src/09-useContext/Home';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('<Home /> tests', () => {
  const user = {
    id: 1,
    name: 'Celeste',
  };

  test('should render home view without user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <Home />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
    // screen.debug();
  });

  test('should render home view with user', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <Home />
      </UserContext.Provider>
    );

    // const { name } = user;
    // expect(name).toBe('Celeste');

    // console.log(user);
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());
    // screen.debug();
  });
});
