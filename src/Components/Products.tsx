import * as React from 'react';
import { Navbar } from './Navbar';
import { useApi } from './ApiContext';
import { Link } from 'react-router-dom';

export type cartItemsType ={
  id: number;
  category: string;
  description: string;
  images: string;
  price: number;
  title: string;
  amount: number;
}




// const fetchProducts = async (): Promise<cartItemsType[]> => {
//   const response = await fetch('https://api.escuelajs.co/api/v1/products');
//   if (!response.ok) {
//     throw new Error('Failed to fetch products');
//   }
//   return response.json();
// };


export function Products () {

    const {apiData } = useApi()
    



    const productSlice = apiData.slice(0,9)
  return (
    <div className='bg-[#F3D8D2]'>
        <Navbar/>
            <div className='flex flex-wrap justify-between px-10 mt-5 -m-4'> 
            {productSlice.map((item) => (
           <div key={item.id} className="mb-5 box-border bg-slate-50 cursor-pointer w-80 rounded-lg overflow-hidden shadow-lg p-4">
            <Link to={`/products/${item.id}`}>
  <img className="w-full" src={item.images} alt={item.title}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{item.title}</div>
    <p className="text-gray-700 text-base">
    {item.description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{item.price}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">In Stock</span>
  </div>
  </Link>
</div>
      ))}
   
            </div>
       
    </div>
  );
}
