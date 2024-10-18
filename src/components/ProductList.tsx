import React, { useState } from 'react';
import { products } from './product';
import PriceFilter from './PriceFilter';
import './productlist.css'

const ProductList: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [minPrice] = useState(0);
  const [maxPrice] = useState(500);

  const handlePriceChange = (min: number, max: number) => {
    const filtered = products.filter(product => product.price >= min && product.price <= max);
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <PriceFilter minPrice={minPrice} maxPrice={maxPrice} onPriceChange={handlePriceChange} />
      <h2 className="mt-4 text-2xl font-bold text-center text-[#592986]">PRODUCTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="border border-gray-300 shadow-lg rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className=" object-cover "
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-lg font-bold mb-2">${product.price}</p>
            <div className="flex space-x-2">
              <button
                className="bg-[#592986] text-white px-4 py-2 rounded hover:bg-[#d3bbe6] hover:text-black transition font-sans"
                onClick={() => alert(`Added to cart: ${product.name}`)}
              >
                Add to Cart
              </button>
              <button
                className="bg-[#d3bbe6] text-black px-4 py-2 rounded hover:bg-[#782986] hover:text-white transition font-sans"
                onClick={() => alert(`Removed from cart: ${product.name}`)}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
