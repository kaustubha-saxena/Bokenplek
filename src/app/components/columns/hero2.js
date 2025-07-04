import React from 'react'
import SideAnimatedBtn from '../buttons/SideAnimatedBtn'
const Hero2 = () => {
  return (
    <div className='w-[100%] h-[100vh] overflow-hidden object-center absolute  top-0'>
     <img className='absolute top-0 left-0  w-full' src="/hero.jpg" alt="" />
     <div className='w-full h-full bg-black absolute top-0 left-0 opacity-60'>

     </div>
       <div className='h-full w-full  bg-transparent text-white pt-60 p-15 relative text-center'>

        <h1 className='font-bold text-center lg:text-5xl xl:text-6xl 2xl:text-7xl '>Discover Your Next Favorite Book</h1>
        <p className='lg:text-lg xl:text-xl 2xl:text-2xl lg:my-10 font-semibold xl:my-15 2xl:my-20'>From bestsellers to indie finds — explore a world of books that inspire, entertain, and move you.</p>
        <div className="flex lg:text-sm xl:text-lg 2xl:text-xl  w-fit font-bold text-black gap-10 mx-auto px-8 relative mt-30   ">

          <button className='relative px-8 py-4 bg-amber-50 hover:cursor-pointer before:content-[""] before:h-[100px] before:w-[100px] before:bg-amber-300 before:top-[-25%] lg:before:left-[-100%] before:absolute before:rounded-full hover:before:scale-600 hover:before:transition-transform before:duration-400 before:transition-timing-function: var(--ease-in-out); overflow-hidden before:opacity-30' ><div className='relative  z-6'>Shop Now</div></button>
          <button className='relative px-8 py-4 bg-amber-500 hover:cursor-pointer before:content-[""] before:h-[100px] before:w-[100px] before:bg-white before:top-[-25%] lg:before:left-[-75%] before:absolute before:rounded-full hover:before:scale-600 hover:before:transition-transform before:duration-400 before:transition-timing-function: var(--ease-in-out); overflow-hidden before:opacity-25' ><div className='relative  z-6'>See What's New</div></button>



        </div>


      </div>
      
    </div>
  )
}

export default Hero2
