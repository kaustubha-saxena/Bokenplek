import React from 'react'

const Hero = () => {
  return (
    <div className='w-100%   lg:h-[40vw] bg-black flex overflow-hidden relative pl-3 justify-center items-center '>
      {/* lg:bg-red-300 xl:bg-blue-300 2xl:bg-green-300 */}
      <div className='h-fit w-[40%]  bg-black text-gray-300  px-7 relative'>

        <h1 className='font-bold text-center lg:text-4xl xl:text-5xl 2xl:text-6xl '>Discover Your Next Favorite Book</h1>
        <p className='lg:text-lg xl:text-xl 2xl:text-2xl lg:my-10 font-semibold xl:my-15 2xl:my-20'>From bestsellers to indie finds — explore a world of books that inspire, entertain, and move you.</p>
        <div className="flex lg:text-sm xl:text-lg 2xl:text-xl  w-fit font-bold text-black gap-10 mx-auto px-8 relative mt-15   ">

          <button className='relative px-4 py-2 bg-amber-50 hover:cursor-pointer before:content-[""] before:h-[100px] before:w-[100px] before:bg-amber-300 before:top-[-25%] lg:before:left-[-100%] before:absolute before:rounded-full hover:before:scale-600 hover:before:transition-transform before:duration-400 before:transition-timing-function: var(--ease-in-out); overflow-hidden before:opacity-30' ><div className='relative  z-6'>Shop Now</div></button>
          <button className='relative px-4 py-2 bg-amber-500 hover:cursor-pointer before:content-[""] before:h-[100px] before:w-[100px] before:bg-white before:top-[-25%] lg:before:left-[-75%] before:absolute before:rounded-full hover:before:scale-600 hover:before:transition-transform before:duration-400 before:transition-timing-function: var(--ease-in-out); overflow-hidden before:opacity-25' ><div className='relative  z-6'>See What's New</div></button>



        </div>


      </div>

      <div className='w-[60%] h-[100%] flex items-center justify-center relative object-contain bg-black overflow-hidden'>
        <img className='w-full  hover:scale-105 hover:transition-transform duration-2000 transition-timing-function: var(--ease-out);' src="/book2.jpg" alt="" />
      </div>
    </div>
  )
}

export default Hero
