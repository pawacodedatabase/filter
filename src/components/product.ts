
import prod2 from '../assets/images/prod6.jpeg'
import prod3 from '../assets/images/prod5.jpeg'
import prod4 from '../assets/images/prod4.webp'
import prod1 from '../assets/images/prod8.webp'
import prod5 from '../assets/images/prod7.jpeg'
import prod9 from '../assets/images/prod9.webp'
import prod10 from '../assets/images/prod10.webp'
import prod11 from '../assets/images/prod11.webp'
import prod12 from '../assets/images/prod12.webp'
import prod13 from '../assets/images/prod13.jpeg'



export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
  }
  
  export const products: Product[] = [
    { id: 1, name: 'Brown & White Classic Fit', price: 50, category: 'Hoodie' , image: prod1},
    { id: 2, name: 'Bame Top', price: 150, category: 'Clothing'  ,  image: prod2},
    { id: 3, name: 'Bame Top Full', price: 200, category: 'Clothing'  ,  image: prod3},
    { id: 4, name: 'Dark Chit', price: 300, category: 'Clothing'  ,  image: prod5},
    { id: 5, name: 'Spin Smoke', price: 120, category: 'Clothing' ,  image: prod4 },
    { id: 9, name: 'Raw Black', price: 400, category: 'Clothing' ,  image: prod9 },
    { id: 10, name: 'DisObey', price: 470, category: 'Clothing' ,  image: prod10 },
    { id: 11, name: 'Black xl', price: 120, category: 'Clothing' ,  image: prod11 },
    { id: 12, name: 'Supreme', price: 150, category: 'Clothing' ,  image: prod12 },
    { id: 13, name: 'Supreme', price: 150, category: 'Clothing' ,  image: prod13 }
  ];