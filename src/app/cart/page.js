"use client";
import React from 'react'
import CartCard from '../components/cards/CartCard';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../Redux/cartslice';
import Link from 'next/link';

const Page = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);
  let totalSalePrice=0;
  let totalMRP=0
  let qty=0
  let shipping=0

  cartItems.forEach(element => {
    qty=qty+element.quantity
    totalMRP=totalMRP+(element.mrp*element.quantity);
    totalSalePrice= totalSalePrice+(element.priceAfterDiscount*element.quantity);

  });
  if(qty!=0){
shipping=40
  }
 
  return (
    <>
      <div className=' flex md:flex-row flex-col   md:px-10  xl:px-30 w-full  text-white   bg-[#2a2a2a] pb-10 mt-20' >
       
        <div className='md:w-[60%] w-80%  sm:px-10  px-5'>
          <div className='flex justify-between items-center my-5'>
            <span className='flex justify-center items-center gap-1'><lord-icon
              src="https://cdn.lordicon.com/qfijwmqj.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#ffffff"
              className="w-7"
            >
            </lord-icon><p className='md:text-sm xl:text-lg font-bold sm:text-lg'>Cart details</p></span>
            <span className= 'md:text-xs lg:text-sm'>Total Item: {qty} | To Pay: {totalSalePrice}</span>
          </div>

 {
      cartItems.length!=0?<><div className=' flex flex-col gap-1 my-2 h-fit sm:px-10 md:px-0 '>

            {
              cartItems.map(book=>{
                return  <CartCard key={book.isbn} params={book} />
              })
            }           
        
          </div></>:<><div className=' flex flex-col gap-1 my-2 h-fit py-10 bg-amber-100 text-[#2a2a2a] justify-center items-center '>
          <div><lord-icon
              src="https://cdn.lordicon.com/qfijwmqj.json"
              trigger="loop" 
              delay="1500"
              
              colors="primary:#2a2a2a,secondary:#2a2a2a"
              width={300}
              height={300}
              className="xl:h-30 xl:w-30 md:h-15 md:w-15 sm:w-20 sm:h-20 w-15 h-15"
            >
            </lord-icon></div>
            <p className='md:text-lg lg:text-xl xl:text-2xl sm:text-xl text-xl font-bold '>Your cart is empty!</p>
            <p className=' md:text-xs lg:text-base xl:text-lg text-sm font-medium'>It&apos;s a good day to buy the items you saved for later</p>
            <div className=' w-full flex justify-center items-center my-5'>

            <Link href={"/"}>
          <button className=' mx-auto  px-10 py-3 bg-amber-400 text-lg hover:cursor-pointer font-bold text-[#2a2a2a]'>Shop Now</button>
            </Link>
          </div>
            </div></>
    }
          
        </div>
        <div className='md:w-[50%] md:px-10 h-fit pt-20 md:ml-5 mx-auto   '>
          <div>
            <span className='md:text-lg xl:text-xl sm:text-xl text-lg font-bold'>Price Summary</span>
          </div>
          <div className='px-3'>

            <div className='flex justify-between items-center md:text-sm lg:text-base xl:text-lg sm:text-lg text-base font-medium text-[#bcbcbc]'>
              <p>Order Total</p>
              <p> ₹ {totalMRP}.00</p>
            </div>
            <div className='flex justify-between items-center md:text-sm lg:text-base xl:text-lg sm:text-lg text-base font-medium text-[#bcbcbc]'>
              <p>Items Discount</p>
              <p>₹ {totalMRP-totalSalePrice}.00</p>
            </div>
            <div className='flex justify-between items-center md:text-sm lg:text-base xl:text-lg sm:text-lg text-base font-medium text-[#bcbcbc]'>
              <p>Shipping</p>
              <p>₹ {shipping}.00</p>
            </div>
            <div className='flex justify-between items-center md:text-base lg:text-lg  xl:text-xl sm:text-xl text-xl font-bold my-4 '>
              <p>To Pay</p>
              <p>₹ {totalSalePrice+shipping}.00</p>
            </div>
          </div>

          <div className=' w-full flex justify-center items-center md:mt-10 mt-18'>

            <button className=' mx-auto text-[#2a2a2a]   md:px-15 lg:px-20 px-30 py-3 bg-amber-400 md:text-base  lg:text-lg xl:text-xl hover:cursor-pointer font-bold'>Buy Now</button>
          </div>


        </div>
      </div>
    </>
  )
}

export default Page
