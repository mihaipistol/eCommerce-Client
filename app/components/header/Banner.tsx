import { useState } from 'react';
import { NavLink } from 'react-router';
import SearchBox from '~/components/header/SearchBox';
import useDarkMode from '~/hooks/useDarkMode';
import bookmarkDark from '../../../resources/icons/dark/bookmark.png';
import menuDark from '../../../resources/icons/dark/burger-menu.png';
import cartDark from '../../../resources/icons/dark/cart.png';
import userDark from '../../../resources/icons/dark/user.png';
import bookmark from '../../../resources/icons/light/bookmark.png';
import menuLight from '../../../resources/icons/light/burger-menu.png';
import cartLight from '../../../resources/icons/light/cart.png';
import userLight from '../../../resources/icons/light/user.png';
import logo from '../../../resources/logo.png';

export default function Banner() {
  const { isDarkMode } = useDarkMode();

  const handleFocus = () => {};

  const handleBlur = () => {};

  return (
    <>
      <div className='flex items-center gap-4 bg-lime-600 p-4 text-white shadow-md md:hidden'>
        <NavLink to='/menu' className='flex'>
          <img
            src={isDarkMode ? menuDark : menuLight}
            alt='Menu Icon'
            className='mr-1 h-6 w-6 shrink-0'
          />
        </NavLink>
        <NavLink to='/' className='flex'>
          <img
            src={logo}
            alt='eCommerce Logo'
            className='mr-1 h-6 w-6 shrink-0'
          />
        </NavLink>
        <span className='grow' />
        <NavLink id='wishlist' to='/wishlist' className='flex'>
          <img
            src={isDarkMode ? bookmarkDark : bookmark}
            alt='Wishlist Icon'
            className='mr-1 h-6 w-6 shrink-0'
          />
          Wishlist
        </NavLink>
        <NavLink id='cart' to='/cart' className='flex'>
          <img
            src={isDarkMode ? cartDark : cartLight}
            alt='Cart Icon'
            className='mr-1 h-6 w-6 shrink-0'
          />
          Cart
        </NavLink>
      </div>
      <div className='flex items-center gap-4 bg-lime-600 p-4 text-white shadow-md'>
        <NavLink to='/' className='hidden md:flex'>
          <img
            src={logo}
            alt='eCommerce Logo'
            className='mr-1 h-6 w-6 shrink-0'
          />
        </NavLink>
        <SearchBox
          className='grow max-md:focus-within:absolute max-md:focus-within:top-0 max-md:focus-within:left-0 max-md:focus-within:w-full'
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <NavLink to='/profile' className='hidden md:flex'>
          <img
            src={isDarkMode ? userDark : userLight}
            alt='User Icon'
            className='mr-1 h-6 w-6 shrink-0'
          />
          Profile
        </NavLink>
        <NavLink id='wishlist' to='/wishlist' className='hidden md:flex'>
          <img
            src={isDarkMode ? bookmarkDark : bookmark}
            alt='Wishlist Icon'
            className='mr-1 h-6 w-6 shrink-0'
          />
          Wishlist
        </NavLink>
        <NavLink id='cart' to='/cart' className='hidden md:flex'>
          <img
            src={isDarkMode ? cartDark : cartLight}
            alt='Cart Icon'
            className='mr-1 h-6 w-6 shrink-0'
          />
          Cart
        </NavLink>
      </div>
    </>
  );
}
