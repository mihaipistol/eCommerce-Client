import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductAsync } from '../../state/slices/product';
import type { AppDispatch, RootState } from '../../state/store';

export interface IProductProps {
  id: string;
}

export default function Product(props: IProductProps) {
  const dispatch = useDispatch<AppDispatch>();

  const product = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProductAsync(props.id));
  }, [dispatch, props.id]);

  return (
    <div className='flex flex-col items-center p-4 md:flex-row md:items-start'>
      <img
        src={product.data?.image}
        alt={product.data?.name}
        className='mb-4 h-64 w-64 object-cover md:mr-8 md:mb-0'
      />
      <div className='flex flex-col'>
        <h1 className='mb-2 text-3xl font-bold'>{product.data?.name}</h1>
        <p className='mb-4 text-xl text-gray-700'>${product.data?.price}</p>
        <p className='text-gray-600'>{product.data?.description}</p>
      </div>
    </div>
  );
}
