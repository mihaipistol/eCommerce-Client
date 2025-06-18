import useDarkMode from '../hooks/useDarkMode';

export interface ISpinnerProps {
  className: string;
}

export default function Spinner({ className = '' }: ISpinnerProps) {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`flex h-full w-full items-center justify-center ${className}`}
    >
      <div
        role='status'
        className={`h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${isDarkMode ? 'text-text-reverse' : 'text-text'} `}
      >
        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !border-0 !p-0 !whitespace-nowrap ![clip:rect(0,0,0,0)]'>
          Loading...
        </span>
      </div>
    </div>
  );
}
