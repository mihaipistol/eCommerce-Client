import FormExample from '~/components/form';
import type { Route } from './+types/form';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Form() {
  return <FormExample />;
}
