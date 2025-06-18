import { Provider } from 'react-redux';
import Banner from '../components/header/Banner';
import store from '../state/store';
import Products from '../components/main/Products';
import { useParams } from 'react-router';

function HomePage() {
  const { page, limit, search } = useParams<{
    page?: string;
    limit?: string;
    search?: string;
  }>();
  return (
    <Provider store={store}>
      <header className=''>
        <Banner />
      </header>
      <main className='flex flex-wrap justify-center gap-4'>
        <Products page={page} limit={limit} search={search} />
      </main>
    </Provider>
  );
}

export default HomePage;
