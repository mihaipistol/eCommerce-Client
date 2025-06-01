import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm, type SubmitHandler } from 'react-hook-form';
import z from 'zod';

const schema = z
  .object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    lastName: z.string().min(1, { message: 'Last name is required' }),
    email: z
      .string()
      .email({ message: 'Invalid email address' })
      .nonempty({ message: 'Email is required' }),
    phoneNumber: z
      .string()
      .regex(/^\+?[0-9\s\-()]+$/, { message: 'Invalid phone number' })
      .nonempty({ message: 'Phone number is required' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .nonempty({ message: 'Password is required' }),
    confirmPassword: z
      .string()
      .min(8, {
        message: 'Confirm password must be at least 8 characters long',
      })
      .nonempty({ message: 'Confirm password is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type FormFields = z.infer<typeof schema>;

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  register: any;
  name: string;
  error?: string;
  autocomplete?: string;
  autoFocus?: boolean;
  disabled?: boolean;
}

function InputField({
  label,
  type = 'text',
  placeholder,
  register,
  name,
  error,
  autocomplete = 'off',
  autoFocus = false,
  disabled = false,
}: InputFieldProps) {
  return (
    <label className='flex flex-col'>
      <span className='text-sm font-medium'>{label}</span>
      <input
        type={type}
        {...register(name)}
        className={`px-4 py-2 border rounded w-full placeholder:opacity-60 ${
          error ? 'border-error' : 'border-border'
        }`}
        placeholder={placeholder}
        autoComplete={autocomplete}
        autoFocus={autoFocus}
        disabled={disabled}
      />
      {error && <span className='text-error text-sm max-w-64'>{error}</span>}
    </label>
  );
}

export default function RegistrationCard() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitted, isSubmitting, isValid, isDirty },
  } = useForm<FormFields>({
    mode: 'all',
    resolver: zodResolver(schema),
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      // Simulate an API call or some processing
      if (data.firstName === 'error') {
        throw new Error('Simulated error for demonstration');
      }
      // Simulate form submission
      const result = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/users`,
        data
      );
      // Log the form data to the console
      console.log('Form submitted:', result);
      // Here you can handle the form submission, e.g., send data to an API
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        switch (error.response.status) {
          case 400:
            // Handle bad request errors, e.g., validation errors
            setError('root', {
              message: error.response.data.message || 'Invalid input',
            });
            break;
          case 409:
            // Handle conflict errors, e.g., user already exists
            setError('root', {
              message: 'User already exists',
            });
            break;
          case 500:
            // Handle server errors
            setError('root', {
              message: 'Internal server error, please try again later',
            });
            break;
          default:
            // Handle other Axios errors with a response status
            console.error('Axios error with response:', error);
            setError('root', {
              message:
                error.response.data.message || 'An unexpected error occurred',
            });
            break;
        }
      } else {
        // Handle non-Axios errors or Axios errors without a response (e.g., network error)
        console.error('Unexpected error:', error);
        setError('root', {
          message: 'An unexpected error occurred',
        });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col items-center space-y-6'
    >
      <h1 className='text-2xl font-bold'>Register</h1>
      <p className='text-gray-600'>Please fill in your details.</p>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4'>
        <InputField
          label='First Name'
          type='text'
          placeholder='Enter your first name'
          register={register}
          name='firstName'
          error={errors.firstName?.message}
          autocomplete='given-name'
          autoFocus
          disabled={isSubmitting}
        />
        <InputField
          label='Last Name'
          type='text'
          placeholder='Enter your last name'
          register={register}
          name='lastName'
          error={errors.lastName?.message}
          autocomplete='family-name'
          disabled={isSubmitting}
        />
        <InputField
          label='Email'
          type='email'
          placeholder='Enter your email'
          register={register}
          name='email'
          error={errors.email?.message}
          autocomplete='email'
          disabled={isSubmitting}
        />
        <InputField
          label='Phone Number'
          type='tel'
          placeholder='Enter your phone number'
          register={register}
          name='phoneNumber'
          error={errors.phoneNumber?.message}
          autocomplete='tel'
          disabled={isSubmitting}
        />
        <InputField
          label='Password'
          type='password'
          placeholder='Enter your password'
          register={register}
          name='password'
          error={errors.password?.message}
          autocomplete='new-password'
          disabled={isSubmitting}
        />
        <InputField
          label='Confirm Password'
          type='password'
          placeholder='Confirm your password'
          register={register}
          name='confirmPassword'
          error={errors.confirmPassword?.message}
          autocomplete='confirm-password'
          disabled={isSubmitting}
        />
      </div>
      {errors.root && (
        <span className='text-error text-sm max-w-64'>
          {errors.root.message || 'An unexpected error occurred'}
        </span>
      )}
      <button type='submit' className='btn-primary' disabled={isSubmitting}>
        Register
      </button>
    </form>
  );
}
