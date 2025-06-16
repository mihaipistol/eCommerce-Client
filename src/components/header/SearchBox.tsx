import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import magnifyingDark from '../../../assets/icons/dark/magnifying-glass.png';
import magnifyingLight from '../../../assets/icons/light/magnifying-glass.png';
import useDarkMode from '../../hooks/useDarkMode';
import type { AppDispatch, RootState } from '../../state/store';
import { searchProductsAsync } from '../../state/slices/search';
import { useDebounce } from 'use-debounce';

interface SearchBoxProps {
  placeholder?: string;
  className?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function SearchBox(props: SearchBoxProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { isDarkMode } = useDarkMode();
  const [expand, setExpand] = useState<boolean>(false);
  const [term, setTerm] = useState<string>('');
  const [debounceTerm] = useDebounce(term, 500);
  const search = useSelector((state: RootState) => state.search);

  const handleFocus = () => {
    setExpand(true);
    if (props.onFocus) props.onFocus();
  };

  const handleBlur = () => {
    setExpand(false);
    if (props.onBlur) props.onBlur();
  };

  useEffect(() => {
    if (debounceTerm.length === 0) return;
    dispatch(searchProductsAsync(debounceTerm));
  }, [debounceTerm, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) return;
    setTerm(e.target.value);
  };

  return (
    <div className={`relative ${props.className} `}>
      <div className='bg-input-background border-input-border dark:border-input-border-reverse dark:bg-input-background-reverse h-8 w-full rounded-2xl border focus-within:h-12 focus-within:rounded-none focus-within:border-x-0 focus-within:border-t-0 md:focus-within:h-8 md:focus-within:rounded-2xl md:focus-within:rounded-b-none md:focus-within:border-x md:focus-within:border-t'>
        <input
          type='search'
          placeholder={props.placeholder || 'Search ...'}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          className='text-text dark:text-text-reverse h-full w-full px-4 pr-12 outline-none'
        />
        <img
          src={isDarkMode ? magnifyingDark : magnifyingLight}
          alt='Search Icon'
          className='absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2'
        />
      </div>
      <div
        className={`bg-input-background border-input-border dark:border-input-border-reverse dark:bg-input-background-reverse absolute w-full px-4 py-2 shadow-md md:rounded-b-2xl md:border md:border-t-0 ${expand ? 'visible' : 'hidden'} `}
      >
        {search.loading ? (
          <span>Loading ...</span>
        ) : search.error ? (
          <span className='text-red-400'>{search.error}</span>
        ) : (
          <ul>
            {search.suggestions.map((product) => (
              <li key={product.id}>
                <div className='text-text dark:text-text-reverse hover:bg-select-hover dark:hover:bg-select-hover-reverse mb-2 cursor-context-menu outline-offset-2'>
                  {product.name}
                </div>
                <div className='bg-select-hover dark:bg-select-hover-reverse my-2 h-0.5 w-full' />
              </li>
            ))}
          </ul>
        )}
        <span className='text-text dark:text-text-reverse flex h-10 cursor-context-menu justify-center pt-2 align-middle md:hidden'>
          Înapoi la site.
        </span>
      </div>
    </div>
  );
}
