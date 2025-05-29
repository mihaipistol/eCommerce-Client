import RegistrationCard from '~/components/registration';
import type { Route } from './+types/register';
import Card from '~/components/base/card';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Register' },
    { name: 'description', content: 'Create a new account' },
    { name: 'keywords', content: 'register, signup, create account' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Your Name or Company' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'theme-color', content: '#ffffff' }, // Adjust theme color as needed
  ];
}

export default function RegisterPage() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Card>
        <RegistrationCard />
      </Card>
    </div>
  );
}
