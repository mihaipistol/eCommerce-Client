import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import LoginCard from '~/components/login';
import type { Route } from '../+types/root';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Login' },
    { name: 'description', content: 'Login to your account' },
  ];
}

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'error' | 'loading' | 'idle'>('idle');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setStatus('loading');
    const result = await axios
      .post(`${import.meta.env.VITE_API_ENDPOINT}/authentication/login`, {
        email: email,
        password: password,
      })
      .catch((err) => {
        console.error('Login failed', err);
        setStatus('error');
      });
    if (result && result.data) {
      // Set cookie with refreshToken
      document.cookie = `accessToken=${result.data.accessToken}; Path=/; SameSite=Lax; Secure`;
      // Redirect to home page or dashboard using react router
      // For example, using a navigate function

      console.log('Login successful', result.data);
      setStatus('idle');
      navigate('/'); // Redirect to home page
    }
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <LoginCard
        email={email}
        password={password}
        status={status}
        onChangeEmail={setEmail}
        onChangePassword={setPassword}
        onLogin={handleLogin}
      />
    </div>
  );
}
