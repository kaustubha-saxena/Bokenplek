import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const GenreCard = ({ props }) => {
  console.log(props.genre);

  return (
    <>
      <Link href={`/collection?genre=${props.genre}`}>

        <div className=' xl:w-[240px] lg:w-[200px] xl:h-40 lg:h-30 md:w-[150px] md:h-25 rounded-xl overflow-hidden relative hover:translate-y-[-20px] hover:transition-transform duration-100 hover:cursor-pointer'>
          <Image
            src={`/header/${props.genre}.jpg`}
            fill={true}
            loading="eager"
            alt="Picture of the author"
          />
          {/* <img className='object-cover' src={`/header/${props.genre}.jpg`} alt="" /> */}
          <div className='w-full h-full bg-black opacity-50 absolute top-0 '></div>
          <div className='absolute top-0  w-full h-full flex justify-center items-center p-3 z-5 '>
            <p className='text-white font-semibold lg:font-bold text-2xl text-center xl:text-xl lg:text-lg md:text-base '>{props.genre.toUpperCase().replaceAll("-", " ")}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default GenreCard
