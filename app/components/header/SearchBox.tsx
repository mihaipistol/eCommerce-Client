import { useState } from 'react';
import magnifyingDark from '../../../resources/icons/dark/magnifying-glass.png';
import magnifyingLight from '../../../resources/icons/light/magnifying-glass.png';
import useDarkMode from '../../hooks/useDarkMode';

interface SearchBoxProps {
  placeholder?: string;
  className?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function SearchBox(props: SearchBoxProps) {
  const { isDarkMode } = useDarkMode();
  const [expand, setExpand] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<string[]>([
    'Subbestion A',
    'Suggestion B',
    'Suggestion C',
    'Suggestion D',
    'Suggestion E',
    'Suggestion F',
    'Suggestion G',
    'Suggestion H',
    'Suggestion I',
    'Suggestion J',
    'Suggestion K'
  ]);

  const handleFocus = () => {
    setExpand(true);
    props.onFocus && props.onFocus();
  };

  const handleBlur = () => {
    setExpand(false);
    props.onBlur && props.onBlur();
  };

  return (
    <div className={`relative ${props.className} `}>
      <div className='bg-input-background border-input-border dark:border-input-border-reverse dark:bg-input-background-reverse h-8 w-full rounded-2xl border focus-within:h-12 focus-within:rounded-none focus-within:border-x-0 focus-within:border-t-0 md:focus-within:h-8 md:focus-within:rounded-2xl md:focus-within:rounded-b-none md:focus-within:border-x md:focus-within:border-t'>
        <input
          type='search'
          placeholder={props.placeholder || 'Search ...'}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className='text-text dark:text-text-reverse h-full w-full px-4 pr-12 outline-none'
        />
        <img
          src={isDarkMode ? magnifyingDark : magnifyingLight}
          alt='Search Icon'
          onClick={() => {
            setSuggestions(['Suggestion X', 'Suggestion Y', 'Suggestion Z']);
          }}
          className='absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2'
        />
      </div>
      <div
        className={`bg-input-background border-input-border dark:border-input-border-reverse dark:bg-input-background-reverse absolute w-full px-4 py-2 shadow-md md:rounded-b-2xl md:border md:border-t-0 ${expand ? 'visible' : 'hidden'} `}
      >
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion}>
              <div className='text-text dark:text-text-reverse hover:bg-select-hover dark:hover:bg-select-hover-reverse mb-2 cursor-context-menu outline-offset-2'>
                {suggestion}
              </div>
              <div className='bg-select-hover dark:bg-select-hover-reverse my-2 h-0.5 w-full' />
            </li>
          ))}
        </ul>
        <span className='text-text dark:text-text-reverse flex h-10 cursor-context-menu justify-center pt-2 align-middle md:hidden'>
          Înapoi la site.
        </span>
      </div>
    </div>
  );
}
