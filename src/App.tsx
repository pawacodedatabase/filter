import React from 'react';
import ProductList from './components/ProductList';
import Header from './components/header';

const App: React.FC = () => {
  return (
    <div>
      <Header/>
      <ProductList />
    </div>
  );
};

export default App;
