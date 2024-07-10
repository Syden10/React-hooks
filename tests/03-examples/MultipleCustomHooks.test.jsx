import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('<MultipleCustomHooks /> tests', () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render component by default', () => {
    useFetch.mockReturnValue({
      data: {
        name: 'Pikachu',
        sprites: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        },
      },
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    screen.getAllByText('Loading...');
    screen.getAllByText('Pokemon info');
    const nextButton = screen.getByRole('button', { name: 'Next' });
    expect(nextButton).toMatchSnapshot;
    // screen.debug();
  });

  test('should increment', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Next' });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
