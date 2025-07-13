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
      <div className=' flex px-30 w-full  text-white   bg-[#2a2a2a] pb-10 mt-20' >
       
        <div className='w-[60%]'>
          <div className='flex justify-between items-center my-5'>
            <span className='flex justify-center items-center gap-1'><lord-icon
              src="https://cdn.lordicon.com/qfijwmqj.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#ffffff"
              className="w-7"
            >
            </lord-icon><p className='text-lg font-bold'>Cart details</p></span>
            <span className='text-sm'>Total Item: {qty} | To Pay: {totalSalePrice}</span>
          </div>

 {
      cartItems.length!=0?<><div className=' flex flex-col gap-1 my-2 h-[100vh]   '>

            {
              cartItems.map(book=>{
                return  <CartCard key={book.isbn} params={book} />
              })
            }           
        
          </div></>:<><div className=' flex flex-col gap-1 my-2 h-[70vh] bg-amber-100 text-[#2a2a2a] justify-center items-center '>
          <div><lord-icon
              src="https://cdn.lordicon.com/qfijwmqj.json"
              trigger="loop" 
              delay="1500"
              
              colors="primary:#2a2a2a,secondary:#2a2a2a"
              width={300}
              height={300}
              className="h-30 w-30 "
            >
            </lord-icon></div>
            <p className='text-2xl font-bold'>Your cart is empty!</p>
            <p className='text-lg font-medium'>It&apos;s a good day to buy the items you saved for later</p>
            <div className=' w-full flex justify-center items-center my-5'>

            <Link href={"/"}>
            <button className=' mx-auto  px-10 py-3 bg-amber-500 text-lg hover:cursor-pointer font-bold text-[#2a2a2a]'>Shop Now</button>
            </Link>
          </div>
            </div></>
    }
          
        </div>
        <div className='w-[50%] px-20  py-20 ml-5 '>
          <div>
            <span className='text-lg font-bold'>Price Summary</span>
          </div>
          <div className='px-3'>

            <div className='flex justify-between items-center font-medium text-[#bcbcbc]'>
              <p>Order Total</p>
              <p> ₹ {totalMRP}.00</p>
            </div>
            <div className='flex justify-between items-center font-medium text-[#bcbcbc]'>
              <p>Items Discount</p>
              <p>₹ {totalMRP-totalSalePrice}.00</p>
            </div>
            <div className='flex justify-between items-center font-medium text-[#bcbcbc]'>
              <p>Shipping</p>
              <p>₹ {shipping}.00</p>
            </div>
            <div className='flex justify-between items-center text-xl font-bold my-4 '>
              <p>To Pay</p>
              <p>₹ {totalSalePrice+shipping}.00</p>
            </div>
          </div>

          <div className=' w-full flex justify-center items-center my-18'>

            <button className=' mx-auto  px-30 py-3 bg-amber-500 text-lg hover:cursor-pointer font-bold'>Buy Now</button>
          </div>


        </div>
      </div>
    </>
  )
}

export default Page
