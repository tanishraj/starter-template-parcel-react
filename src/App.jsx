import { useState } from 'react';
import reactLogo from './assets/svg-icons/react.svg';
import ParcelLogo from './assets/svg-icons/parcel.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a
          href='https://parceljs.org/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={ParcelLogo}
            className='logo'
            alt='Vite logo'
          />
        </a>
        <a
          href='https://react.dev'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={reactLogo}
            className='logo react'
            alt='React logo'
          />
        </a>
      </div>
      <h1>Parcel + React</h1>
      <div className='card'>
        <button
          type='button'
          onClick={() => setCount(prevCount => prevCount + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;