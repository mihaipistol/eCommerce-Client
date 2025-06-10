import { NavLink, Outlet } from 'react-router';

export default function UsersPage() {
  const profiles = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Alice Johnson', age: 28 }
  ];

  return (
    <div>
      <h1 className='mb-4 text-2xl font-bold'>User</h1>
      <ul className='space-y-2'>
        {profiles.map((profile) => (
          <li key={profile.id} className='rounded border p-4'>
            <h2 className='text-xl font-semibold'>{profile.name}</h2>
            <p>Age: {profile.age}</p>
            <NavLink
              className={({ isActive }) =>
                (isActive ? 'text-blue-500' : 'text-gray-500') +
                ' hover:underline'
              }
              to={`/users/${profile.id}`}
            >
              View Profile
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
