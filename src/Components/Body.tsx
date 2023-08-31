import * as React from 'react';
import { useState } from 'react';
import img1 from '../Assets/image-product-1.jpg'
import img2 from '../Assets/image-product-2.jpg'
import img3 from '../Assets/image-product-3.jpg'
import img4 from '../Assets/image-product-4.jpg'
import cart from '../Assets/icon-cart.svg'
import { useCart } from './CartContext';
import { Navbar } from './Navbar';
import {useParams} from 'react-router-dom'
import { useApi } from './ApiContext';
import { cartItemsType } from './Products';


 
interface imgs {
    id: number;
    image: string 
}


interface RouteParams{
    id: string
}


const  Body:React.FC=() =>{
    const { productId } = useParams<{ productId: string }>();
    const {apiData } = useApi()

    const parsedProductId = productId ? parseInt(productId) : undefined

    const productDetail = apiData.find((product: cartItemsType)=>product.id === parsedProductId )
    


    

    const {addToCart } = useCart()
const [image, setImage] = useState<string>(img1)
let [count, setCount] = useState<number>(0)
    const img: imgs[]=[
        {id:1, image:img1},
        {id:2, image:img2},
        {id:3, image:img3},
        {id:4, image:img4},

    ]

    const increment =()=>{
        setCount(count + 1)
    }
    const decrement =()=>{
        setCount(count - 1)
    }

    const handleClick =(image:string)=>{
        setImage(image)
    }


  return (
    <div>
        <Navbar/>

   
    <div className='px-28 flex justify-center  mt-12'>
        <div className="left mr-20 ">
            <div className='  w-[350px]'>
                <div>
                    <img className={` rounded-2xl  w-full transition-transform transform ${image !== img1 ? 'animate-none' : ''}`} src={image} alt=''/>
                </div>
                <div className='flex justify-between mt-5 h-[75px] w-full  '>
                    {
                        img.map((item)=>(
                            <img className='cursor-pointer rounded-xl transition-opacity duration-300 hover:opacity-75' key={item.id} src={item.image} alt=' ' 
                            onClick={()=>handleClick(item.image)} />
                        ))
                    }
                </div>
               
            </div>
        </div>
        <div className="right w-[405px] ">
                    <p className='font-bold my-2 text-[#ff7d1a]'>SNEAKER COMPANY</p>
                    <h1 className='text-3xl font-bold '>{productDetail?.title}</h1>
                    <p className='my-5 text-sm'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weater can offer</p>
                    <p className='font-bold text-2xl mb-2 '>$125.00 <span className='bg-[#ffede0] px-2 py-1 rounded ml-4 text-[#ff7d1a]'>50%</span></p>
                    <p className='line-through text-slate-400' >$250.00</p>

                    <div className='flex items-center h-10 mt-3 '>
                        <div className='px-2 mr-5 flex  h-full items-center justify-between bg-[#f7f8fd] rounded-md w-[110px]'>
                        <button disabled={count <= 0}  onClick={decrement} className='text-[#ff7d1a] font-bold   '>-</button>
                        <span className='font-bold'>{count}</span>
                        <button onClick={increment} className='text-[#ff7d1a] font-bold   '>+</button>
                        </div>
                        <div className='rounded-lg cursor-pointer text-white flex justify-center items-center bg-[#ff7d1a] h-full w-[250px]'>
                        <img className='mr-4' src={cart} alt=''/>
                            <button onClick={()=>addToCart(image)} className=' '> Add to cart</button>
                        </div>
                        
                    </div>
        </div>
    </div>
    </div>
  );
}

export default Body;