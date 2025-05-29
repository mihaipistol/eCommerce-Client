import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import z from 'zod';

// Define the schema using zod
const schema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: 'First name is required asd asd asd sd sa das sad ' }),
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
      .min(6, { message: 'Password must be at least 6 characters long' })
      .nonempty({ message: 'Password is required' }),
    confirmPassword: z
      .string()
      .min(6, {
        message: 'Confirm password must be at least 6 characters long',
      })
      .nonempty({ message: 'Confirm password is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type FormFields = z.infer<typeof schema>;

export default function RegistrationCard() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitted, isSubmitting, isValid, isDirty },
  } = useForm<FormFields>({
    mode: 'onBlur', // Validate on blur
    resolver: zodResolver(schema), // Use zod for validation
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      // Simulate an API call or some processing
      if (data.firstName === 'error') {
        throw new Error('Simulated error for demonstration');
      }
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Log the form data to the console
      console.log('Form submitted:', data);
      // Here you can handle the form submission, e.g., send data to an API
    } catch (error) {
      // Handle errors, e.g., set a form error
      setError('confirmPassword', {
        type: 'manual',
        message: 'An error occurred while submitting the form',
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col items-center space-y-6'
    >
      <h1 className='text-2xl font-bold'>Register</h1>
      <p className='text-gray-600'>Please fill in your details.</p>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
        <label className='flex flex-col'>
          <span className='flex justify-between'>
            <span className='text-sm font-medium'>First Name</span>
            {errors.firstName && (
              <span className='text-error text-sm'>
                {errors.firstName.message}
              </span>
            )}
          </span>
          <input
            type='text'
            {...register('firstName')}
            className={`px-4 py-2 border rounded w-full placeholder:opacity-60 ${
              errors.firstName ? 'border-error' : 'border-border'
            }`}
            placeholder='Enter your first name'
            autoFocus
          />
        </label>

        <label className='flex flex-col'>
          <span className='text-sm font-medium'>Last Name</span>
          <input
            type='text'
            {...register('lastName')}
            className={`px-4 py-2 border rounded w-full placeholder:opacity-60 ${
              errors.lastName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder='Enter your last name'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-sm font-medium'>Email</span>
          <input
            type='email'
            {...register('email')}
            className={`px-4 py-2 border rounded w-full placeholder:opacity-60 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder='Enter your email'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-sm font-medium'>Phone Number</span>
          <input
            type='tel'
            {...register('phoneNumber')}
            className={`px-4 py-2 border rounded w-full placeholder:opacity-60 ${
              errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder='Enter your phone number'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-sm font-medium'>Password</span>
          <input
            type='password'
            {...register('password')}
            className={`px-4 py-2 border rounded w-full placeholder:opacity-60 ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder='Enter your password'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-sm font-medium'>Confirm Password</span>
          <input
            type='password'
            {...register('confirmPassword')}
            className={`px-4 py-2 border rounded w-full placeholder:opacity-60 ${
              errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder='Confirm your password'
          />
        </label>
      </div>
      <button type='submit' className='btn-primary' disabled={isSubmitting}>
        Register
      </button>
    </form>
  );
}
