import React from 'react'
import Link from 'next/link'
const Bookcard = ({props}) => {
  // console.log("hi");
  // console.log(props.title);
  return (
    <>
      
      <Link href={`/bookpage?isbn=${props.isbn}`}>
        <div className='relative flex-col justify-center items-center xl:w-[200px]  lg:w-[150px]  text-white  '>
          <div className='hover:scale-105 transition:transform duration-300 '>
              <img className='w-full' src={`/books/${props.genre}/${props.imgName}.png`} alt="Book Cover Page" />
                   
              
          </div>
          <div className='flex justify-center items-left flex-col    px-2  h-20'>
              <p className='truncate lg:text-sm xl:text-lg  font-semibold font-[Fredoka] '>{props.title} </p>
            
            <p className=' lg:text-xs xl:text-sm font-medium'>{props.author}</p>
            <div className='flex gap-3 justify-start items-center  '>

            <p className=' lg:text-sm xl:text-lg font-semibold'>₹{props.priceAfterDiscount}</p>
            <strike><p className='lg:text-xs '>₹{props.mrp}</p></strike>
            </div>
          </div>
        </div>
      </Link>

    </>
  )
}

export default Bookcard
