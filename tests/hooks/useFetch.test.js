import { waitFor } from '@testing-library/dom';
import { renderHook } from '@testing-library/react';
import { useFetch } from '../../src/hooks';

jest.mock('../../src/hooks/useFetch');

describe('useFetch tests', () => {
  test('should render loading before fetched data is rendered', () => {
    useFetch.mockReturnValue({
      data: {
        name: null,
        sprites: null,
      },
      isLoading: true,
      hasError: null,
    });
    const { result } = renderHook(() => useFetch());
    const { isLoading } = result.current;
    // console.log(result);

    expect(result.current.data.name).toBeNull();
    expect(result.current.data.sprites).toBeNull();
    expect(isLoading).toBeTruthy();
  });

  test('should fetch a pokemon datat while isLoading false', async () => {
    useFetch.mockReturnValue({
      data: {
        name: 'Pikachu',
        sprites: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        },
      },
      isLoading: false,
      hasError: null,
    });
    const { result } = renderHook(() => useFetch());
    await waitFor(() => expect(result.current.sprites).not.toBeNull());
    const { name, sprites, isLoading } = result.current.data;
    // console.log(name);
    expect(name).toBe('Pikachu');
    expect(sprites).toBeInTheDocument;
    expect(isLoading).toBeFalsy();
  });
});
