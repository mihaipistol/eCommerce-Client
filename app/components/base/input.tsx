import { on } from 'events';
import type { r } from 'node_modules/@react-router/dev/dist/routes-DHIOx0R9';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  name?: string;
  id?: string;
  classsName?: string;
}

export default function Input({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
  className = '',
  required = false,
  autoFocus = false,
  maxLength,
  minLength,
  pattern,
  name,
  id,
  ...rest
}: InputProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className='flex justify-end items-center'>
        {label && (
          <label htmlFor={id} className='text-sm font-medium w-full'>
            {label}
          </label>
        )}
        {required && <span className='text-red-500'>*</span>}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`px-4 py-2 border rounded w-full placeholder:opacity-60`}
        required={required}
        autoFocus={autoFocus}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        name={name}
        id={id}
        {...rest}
      />
    </div>
  );
}
