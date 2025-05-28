import Card from './base/card';

interface LoginCardProps {
  email: string;
  password: string;
  status: 'error' | 'loading' | 'idle';
  onChangeEmail: (username: string) => void;
  onChangePassword: (password: string) => void;
  onLogin: () => void;
}

export default function LoginCard(props: LoginCardProps) {
  return (
    <Card>
      <div className='flex flex-col items-center justify-center space-y-4'>
        <h1 className='text-2xl font-bold'>Login</h1>
        <p className='text-gray-600'>Please enter your credentials.</p>
        <input
          type='email'
          placeholder='Email'
          className='px-4 py-2 border rounded w-64'
          value={props.email}
          onChange={(e) => props.onChangeEmail(e.target.value)}
          disabled={props.status === 'loading'}
        />
        <input
          type='password'
          placeholder='Password'
          className='px-4 py-2 border rounded w-64'
          value={props.password}
          onChange={(e) => props.onChangePassword(e.target.value)}
          disabled={props.status === 'loading'}
        />
        {props.status === 'error' && (
          <p className='text-red-500'>Invalid credentials, please try again.</p>
        )}
        {props.status === 'loading' && (
          <p className='text-blue-500'>Logging in...</p>
        )}
        {props.status === 'idle' && (
          <p className='text-gray-500'>Ready to log in.</p>
        )}
        <button
          onClick={props.onLogin}
          className='btn-primary'
          type='button'
          disabled={props.status === 'loading'}
        >
          Login
        </button>
      </div>
    </Card>
  );
}
