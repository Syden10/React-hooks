import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('<TodoApp /> tests', () => {
  useTodos.mockReturnValue({
    todos: [
      {
        id: 1,
        description: 'Learn React',
        done: false,
      },
      {
        id: 2,
        description: 'Learn Node',
        done: true,
      },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleNewTodo: jest.fn(),
  });
  test('should render component', () => {
    render(<TodoApp />);
    // screen.debug();
    expect(screen.getByText('Learn React')).toBeTruthy();
    expect(screen.getByText('Learn Node')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});
