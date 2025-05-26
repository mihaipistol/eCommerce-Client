import type { Route } from '../+types/root';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Login' },
    { name: 'description', content: 'Login to your account' },
  ];
}

export default function Login() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <h1 className='text-2xl font-bold'>Login Page</h1>
    </div>
  );
}
