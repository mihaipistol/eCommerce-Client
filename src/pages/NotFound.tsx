import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <h1 className='mb-4 text-4xl font-bold'>404 - Page Not Found</h1>
      <p className='mb-8 text-lg'>
        The page you are looking for does not exist.
      </p>
      <Link to='/' className='text-blue-500 hover:underline'>
        Go back to Home
      </Link>
    </div>
  );
}
