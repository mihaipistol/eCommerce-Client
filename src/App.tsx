import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import WishlistPage from './pages/WishlishPage';
import NotFound from './pages/NotFound';
import ProfilePage from './pages/ProfilePage';
import ProductPage from './pages/ProductPage';

const router = createBrowserRouter([
  {
    path: '/:search?',
    element: <HomePage />,
    errorElement: <NotFound />,
    index: true
  },
  {
    path: '/product/:id',
    element: <ProductPage />,
    errorElement: <NotFound />
  },
  {
    path: '/cart',
    element: <CartPage />
  },
  {
    path: '/users',
    element: <UsersPage />,
    children: [
      {
        path: ':id',
        element: <ProfilePage />
      }
    ]
  },
  {
    path: '/wishlist',
    element: <WishlistPage />
  }
]);

export function App() {
  return <RouterProvider router={router} />;
}
