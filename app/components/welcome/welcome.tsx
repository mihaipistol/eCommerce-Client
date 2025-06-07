import { Link } from 'react-router';
import logoDark from './logo-dark.svg';
import logoLight from './logo-light.svg';

export function Welcome() {
  return (
    <main className='flex items-center justify-center pt-16 pb-4'>
      <div className='flex-1 flex flex-col items-center gap-16 min-h-0'>
        <header className='flex flex-col items-center gap-9'>
          <div className='w-[500px] max-w-[100vw] p-4'>
            <img
              src={logoLight}
              alt='React Router'
              className='block w-full dark:hidden'
            />
            <img
              src={logoDark}
              alt='React Router'
              className='hidden w-full dark:block'
            />
          </div>
        </header>
        <div className='flex flex-wrap gap-4 justify-center'>
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
        </div>
      </div>
    </main>
  );
}
