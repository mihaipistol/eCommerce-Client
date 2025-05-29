import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import z from 'zod';

// Define the schema using zod
const schema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' }),
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .nonempty({ message: 'Email is required' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters long' })
    .refine((value) => value.trim() !== '', {
      message: 'Message cannot be empty',
    }),
});

type SchemaFields = z.infer<typeof schema>;

export default function FormExample() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitted, isSubmitting, isValid, isDirty },
  } = useForm<SchemaFields>({
    mode: 'onBlur', // Validate on blur
    defaultValues: {
      name: 'error',
      email: 'cineva@undeva.com',
      message: '1234567890',
    },
    resolver: zodResolver(schema), // Use zod for validation
  });

  const onSubmit: SubmitHandler<SchemaFields> = async (data) => {
    try {
      // Simulate an API call or some processing
      if (data.name === 'error') {
        throw new Error('Simulated error for demonstration');
      }
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Log the form data to the console
      console.log('Form submitted:', data);
      // Here you can handle the form submission, e.g., send data to an API
    } catch (error) {
      // Handle errors, e.g., set a form error
      setError('root', {
        type: 'manual',
        message: 'An error occurred while submitting the form',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors.root && (
        <span className='text-red-500 text-sm'>{errors.root.message}</span>
      )}
      <div className='mb-4'>
        <label>Name</label>
        {errors.name && (
          <span className='text-red-500 text-sm'>{errors.name.message}</span>
        )}
        <input
          {...register('name')}
          type='text'
          className='w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-500'
          placeholder='Enter your name'
        />
      </div>
      <div className='mb-4'>
        <label>Email</label>
        {errors.email && (
          <span className='text-red-500 text-sm'>{errors.email.message}</span>
        )}
        <input
          {...register('email')}
          type='email'
          className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500'
          placeholder='Enter your email'
        />
      </div>
      <div className='mb-4'>
        <label>Message</label>
        {errors.message && (
          <span className='text-red-500 text-sm'>{errors.message.message}</span>
        )}
        <textarea
          {...register('message')}
          className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500'
          placeholder='Enter your message'
        />
      </div>
      <button
        disabled={!isValid || isSubmitting}
        type='submit'
        className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-blue-300 transition-colors'
      >
        Submit
      </button>
    </form>
  );
}
