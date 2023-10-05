import React, { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import './style.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

export const SearchContext = createContext('');

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className='App'>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className='wrapper'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
