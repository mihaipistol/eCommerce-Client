import Card from './base/card';
import Input from './base/input';

export default function RegistrationCard() {
  return (
    <Card className='xl:w-full m-10'>
      <form>
        <div className='flex flex-col items-center justify-center space-y-4'>
          <h1 className='text-2xl font-bold'>Register</h1>
          <p className='text-gray-600'>Please fill in your details.</p>
          <Input
            type='text'
            label='First Name'
            placeholder='name'
            required
            className='w-64'
          />
          <Input
            type='text'
            label='Last Name'
            placeholder='surname'
            required
            className='w-64'
          />
          <Input
            type='email'
            label='Email'
            placeholder='email'
            required
            className='w-64'
          />
          <Input
            type='tel'
            label='Phone Number'
            placeholder='123-456-7890'
            required
            className='w-64'
          />
          <Input
            type='password'
            label='Password'
            placeholder='*********'
            required
            className='w-64'
          />
          <Input
            type='password'
            label='Confirm Password'
            placeholder='*********'
            required
            className='w-64'
          />
          <button type='submit' className='btn-primary'>
            Register
          </button>
        </div>
      </form>
    </Card>
  );
}
