import { NavLink } from 'react-router';
import SearchBox from '../base/SearchBox';
import logo from '../../../resources/logo.png';
import bookmark from '../../../resources/icons/dark/bookmark.png';
import cart from '../../../resources/icons/dark/cart.png';
import user from '../../../resources/icons/dark/user.png';

export default function Banner() {
  return (
    <div className='flex items-center gap-4 bg-blue-500 p-4 text-white shadow-md'>
      <NavLink to='/' className='flex'>
        <img
          className='mr-1 h-6 w-6 shrink-0 max-md:hidden'
          src={logo}
          alt='eCommerce Logo'
        />
      </NavLink>
      <SearchBox className='grow' />
      <NavLink to='/profile' className='flex max-md:hidden'>
        <img className='mr-1 h-6 w-6 shrink-0' src={user} alt='User Icon' />
        Profile
      </NavLink>
      <NavLink to='/wishlist' className='flex max-md:hidden'>
        <img
          className='mr-1 h-6 w-6 shrink-0'
          src={bookmark}
          alt='Wishlist Icon'
        />
        Wishlist
      </NavLink>
      <NavLink to='/cart' className='flex max-md:hidden'>
        <img className='mr-1 h-6 w-6 shrink-0' src={cart} alt='Cart Icon' />
        Cart
      </NavLink>
    </div>
  );
}
