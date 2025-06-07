import { useState } from 'react';
import magnifyingDark from '../../../resources/icons/dark/magnifying-glass.png';
import magnifyingLight from '../../../resources/icons/light/magnifying-glass.png';
import useDarkMode from '../../hooks/useDarkMode';

interface SearchBoxProps {
  placeholder?: string;
  className?: string;
}

export default function SearchBox(props: SearchBoxProps) {
  const { isDarkMode } = useDarkMode();

  const [expand, setExpand] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<string[]>([
    'Subbestion  A',
    'Suggestion B',
    'Suggestion C'
  ]);

  const handleFocus = () => {
    setExpand(true);
  };

  const handleBlur = () => {
    setExpand(false);
  };

  return (
    <div className={`relative ${props.className}`}>
      <div className='bg-accent h-8 w-full rounded-2xl border focus-within:rounded-b-none'>
        <input
          type='search'
          placeholder={props.placeholder || 'Search ...'}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className='h-full w-full px-4 pr-10 outline-none'
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
        className={`bg-accent ${expand ? 'block' : 'hidden'} absolute w-full rounded-b-2xl border border-t-0 px-4 py-2 shadow-md`}
      >
        <ul>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              className='cursor-context-menu hover:bg-amber-600'
            >
              {suggestion}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
