import React from 'react'
import Link from 'next/link'
const Bookcard = ({props}) => {
  // console.log("hi");
  console.log(props.isbn);
  return (
    <>
      
      <Link href={`/bookpage?isbn=${props.isbn}`}>
        <div className='flex-col justify-center items-center w-[200px] h-[400px]'>
          <div>
              {/* <img className='w-full' src={`/books/${props.genre}/${props.imgName}.png`} alt="" /> */}
              <img className='w-full' src={`/books/Adventure/theHobbit.png`} alt="" />
              
          </div>
          <div className='flex justify-center items-left flex-col  gap-1 mt-2 px-2  h-20'>
              <p className='truncate text-lg font-semibold '>{props.title} </p>
            
            <p className='text-sm font-medium'>{props.genre}</p>
            <p className='text-lg font-semibold'>₹{props.priceAfterDiscount}</p>
          </div>
        </div>
      </Link>

    </>
  )
}

export default Bookcard
