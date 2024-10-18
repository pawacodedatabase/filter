import React, { useState } from 'react';
import './productlist.css'

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ minPrice, maxPrice, onPriceChange }) => {
  const [min, setMin] = useState(minPrice);
  const [max, setMax] = useState(maxPrice);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMin(value);
    onPriceChange(value, max);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMax(value);
    onPriceChange(min, value);
  };

  return (
    <div className='border border-gray-300 shadow-lg rounded-lg p-4 flex flex-col items-center'>
      <h3 className='font-sans font-bold '>Filter By Price</h3>
      <br />
      <label className='font-sans font-bold'>
        Min Price: ${min}
        <input
            className='range-slider'
            id='priceRange'
          type="range"
          min={minPrice}
          max={maxPrice}
          value={min}
          onChange={handleMinChange}
        />
      </label>
      <br />
      <label className='font-sans font-bold'>
        Max Price: ${max}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={max}
          onChange={handleMaxChange}
        />
      </label>
    </div>
  );
};

export default PriceFilter;
