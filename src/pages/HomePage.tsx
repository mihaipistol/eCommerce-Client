import { Provider } from 'react-redux';
import Banner from '../components/header/Banner';
import store from '../state/store';

function HomePage() {
  return (
    <Provider store={store}>
      <header className=''>
        <Banner />
      </header>
      <main className='flex flex-wrap justify-center gap-4'>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
        <div>Item 8</div>
        <div>Item 9</div>
        <div>Item 10</div>
        <div>Item 11</div>
        <div>Item 12</div>
        <div>Item 13</div>
        <div>Item 14</div>
        <div>Item 15</div>
        <div>Item 16</div>
        <div>Item 17</div>
        <div>Item 18</div>
        <div>Item 19</div>
        <div>Item 20</div>
        <div>Item 21</div>
        <div>Item 22</div>
        <div>Item 23</div>
        <div>Item 24</div>
        <div>Item 25</div>
        <div>Item 26</div>
        <div>Item 27</div>
        <div>Item 28</div>
        <div>Item 29</div>
        <div>Item 30</div>
      </main>
    </Provider>
  );
}

export default HomePage;
