import RegistrationCard from '~/components/forms/registration';
import type { Route } from './+types/register';
import Card from '~/components/base/old/card';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Register' },
    { name: 'description', content: 'Create a new account' },
    { name: 'keywords', content: 'register, signup, create account' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
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
