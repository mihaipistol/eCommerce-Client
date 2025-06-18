import { Provider } from 'react-redux';
import { useParams } from 'react-router';
import Banner from '../components/header/Banner';
import store from '../state/store';
import Product from '../components/main/Product';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  return (
    <Provider store={store}>
      <header>
        <Banner />
      </header>
      <main>
        <Product id={id as string} />
      </main>
    </Provider>
  );
}
