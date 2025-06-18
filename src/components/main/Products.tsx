import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from '../../state/slices/products';
import type { AppDispatch, RootState } from '../../state/store';
import Spinner from '../Spinner';
import { NavLink } from 'react-router';

interface ProductsProps {
  className?: string;
  page?: string;
  limit?: string;
  search?: string;
}

export default function Products(props: ProductsProps) {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(
      fetchProductsAsync({
        page: props.page,
        limit: props.limit,
        search: props.search
      })
    );
  }, [dispatch, props.limit, props.page, props.search]);

  if (products.error) {
    return <h3 className='p-2 text-red-500'>{products.error}</h3>;
  }

  if (products.loading) {
    return <Spinner className='pt-50' />;
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 p-4'>
      {products.data.map((product) => (
        <div
          key={product.id}
          className='flex w-64 flex-col items-center rounded-lg border p-4 shadow-md'
        >
          <img
            src={product.image}
            alt={product.name}
            className='mb-4 h-40 w-40 object-cover'
          />
          <h2 className='mb-2 text-lg font-semibold'>{product.name}</h2>
          <p className='mb-4 text-gray-700'>${product.price}</p>
          <NavLink
            to={`/product/${product.id}`}
            className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
          >
            View Product
          </NavLink>
        </div>
      ))}
    </div>
  );
}
