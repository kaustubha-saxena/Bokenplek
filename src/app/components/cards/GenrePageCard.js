import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const GenrePageCard = ({props}) => {


  return (
    <>
      <Link href={`/collection?genre=${props.genre}`}>

        <div className=' xl:w-[350px] lg:w-[200px] xl:h-70 lg:h-30 md:w-[150px] md:h-25 rounded-xl overflow-hidden relative hover:translate-y-[-20px] hover:transition-transform duration-100 hover:cursor-pointer'>
          <Image
            src={`/header/${props.genre}.jpg`}
            fill={true}
            loading="eager"
            alt="Picture of the Genre"
            className='object-cover'
          />
          {/* <img className='object-cover' src={`/header/${props.genre}.jpg`} alt="" /> */}
          <div className='w-full h-full  absolute inset-0 bg-gradient-to-t from-black/70 to-black/30'></div>
          <div className='absolute top-0  w-full h-full flex justify-center items-center p-3 z-5 '>
            <p className='text-white font-semibold lg:font-bold text-4xl text-center xl:text-3xl lg:text-lg md:text-base '>{props.genre.toUpperCase().replaceAll("-", " ")}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default GenrePageCard
