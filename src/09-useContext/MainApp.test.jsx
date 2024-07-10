import { render, screen } from '@testing-library/react';
import { MainApp } from './MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('<MainApp /> tests', () => {
  test('should render home page', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    // screen.debug();
    expect(screen.getByText('Main App')).toBeTruthy();
  });
  test('should render login page', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );

    const h2 = screen.getByRole('heading', { level: 2 }).innerHTML;
    // screen.debug();
    expect(h2).toBe('Login');
  });
});
