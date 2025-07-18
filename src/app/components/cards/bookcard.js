import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Bookcard = ({ props }) => {
  return (
    <>
      <Link href={`/bookpage?isbn=${props.isbn}`} onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}>
        <div className='relative flex-col justify-center items-center xl:w-[200px]  lg:w-[150px] md:w-[120px] sm:w-[140px] w-[170px]  text-white hover:translate-y-[-15px] transition:transform duration-200 '>
          {
            props.tag === "Best Seller" ? <div className=' w-15 md:w-15 absolute top-[-15px] right-[-15px] z-9'><img className='' src="/icons/best-seller.png" alt="" /></div> : <></>
          }
          <div className='w-full  h-fit relative group'>

            <Image
              src={`/books/${props.genre}/${props.imgName}.png`}
              width={200}
              height={300}
              alt="Picture of Book Cover"
              className='rounded-xl '
            />
           
          </div>

          <div className='flex justify-center items-left flex-col  px-2  h-25 gap-1'>
            <div className='flex-col'>
              <span><p className='truncate md:text:sm lg:text-base xl:text-lg  font-semibold font-[Fredoka] '>{props.title} </p></span>
              <span><p className=' md:text-xs xl:text-sm text-gray-300'>{props.author}</p></span>
              <span><p className=' md:text-xs xl:text-sm font-medium text-gray-300'>★ {props.rating}</p></span>
            </div>


            <div className='flex gap-3 justify-start items-center  '>

              <p className=' md:text-base lg:text-base xl:text-lg font-semibold'>₹{props.priceAfterDiscount}</p>
              <strike><p className='  md:text-xs font-medium text-[#dadada]'>₹{props.mrp}</p></strike>
            </div>
          </div>
        </div>
      </Link>

    </>
  )
}

export default Bookcard
