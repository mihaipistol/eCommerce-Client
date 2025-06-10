import { useParams } from 'react-router';

export default function ProfilePage() {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <h1 className='mb-4 text-2xl font-bold'>Profile</h1>
      <p>Details about user {id} will go here.</p>
    </div>
  );
}
