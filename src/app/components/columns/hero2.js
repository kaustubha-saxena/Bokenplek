"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Navbar from '../Navbar/Navbar'
const Hero2 = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <>
    <Navbar/>
    <div className='w-[100%] h-[100vh] overflow-hidden object-center relative  top-0 bg-black'>
      

      <img className='  w-screen h-screen  object-cover' src="/hero.jpg" alt="" />
      
      <div className='w-full h-full bg-black absolute top-0 left-0 opacity-60'>

      </div>


      <Carousel orientation='horizontal' className="w-full absolute top-0 z-5"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        // onMouseEnter={plugin.current.stop}
        //     onMouseLeave={plugin.current.reset}
        
      >
        <CarouselContent>
          <CarouselItem className="basis-1/1"><div className='h-full w-full  bg-transparent text-white pt-60 p-15 relative text-center'>

            <h1 className='font-bold text-center lg:text-5xl xl:text-5xl 2xl:text-5xl font-[Libre]'>Discover Your Next Favorite Book</h1>
            <p className='lg:text-xl xl:text-2xl 2xl:text-3xl lg:my-10 font-semibold xl:my-15 2xl:my-20 font-[Fredoka]'>From bestsellers to indie finds — explore a world of books that inspire, entertain, and move you.</p>
            <div className="flex lg:text-sm xl:text-lg 2xl:text-xl  w-fit font-bold text-black gap-10 mx-auto px-8 relative mt-30   ">

              <button className='relative px-8 py-4 bg-amber-50 hover:cursor-pointer before:content-[""] before:h-[100px] before:w-[100px] before:bg-amber-300 before:top-[-25%] lg:before:left-[-100%] before:absolute before:rounded-full hover:before:scale-600 hover:before:transition-transform before:duration-400 before:transition-timing-function: var(--ease-in-out); overflow-hidden before:opacity-30' ><div className='relative  z-6'>Shop Now</div></button>
              <button className='relative px-8 py-4 bg-amber-500 hover:cursor-pointer before:content-[""] before:h-[100px] before:w-[100px] before:bg-white before:top-[-25%] lg:before:left-[-75%] before:absolute before:rounded-full hover:before:scale-600 hover:before:transition-transform before:duration-400 before:transition-timing-function: var(--ease-in-out); overflow-hidden before:opacity-25' ><div className='relative  z-6'>See What's New</div></button>



            </div>


          </div></CarouselItem>
          <CarouselItem className="basis-1/1"><div className='h-full w-full  bg-transparent text-white pt-60 p-15 relative text-center'>

            <h1 className='font-bold text-center lg:text-5xl xl:text-5xl 2xl:text-5xl font-[Libre] '>Where Stories Begin and Minds Expand</h1>
            <p className='lg:text-xl xl:text-2xl 2xl:text-3xl lg:my-10 font-semibold xl:my-15 2xl:my-20 font-[Fredoka]'>Unlock the magic of reading — whether you’re into thrillers, romance, or thoughtful non-fiction.</p>
            <div className="flex lg:text-sm xl:text-lg 2xl:text-xl  w-fit font-bold text-black gap-10 mx-auto px-8 relative mt-30   ">

              <button className='relative px-8 py-4 bg-amber-50 hover:cursor-pointer before:content-[""] before:h-[100px] before:w-[100px] before:bg-amber-300 before:top-[-25%] lg:before:left-[-100%] before:absolute before:rounded-full hover:before:scale-600 hover:before:transition-transform before:duration-400 before:transition-timing-function: var(--ease-in-out); overflow-hidden before:opacity-30' ><div className='relative  z-6'>Shop Now</div></button>
              <button className='relative px-8 py-4 bg-amber-500 hover:cursor-pointer before:content-[""] before:h-[100px] before:w-[100px] before:bg-white before:top-[-25%] lg:before:left-[-75%] before:absolute before:rounded-full hover:before:scale-600 hover:before:transition-transform before:duration-400 before:transition-timing-function: var(--ease-in-out); overflow-hidden before:opacity-25' ><div className='relative  z-6'>See What's New</div></button>



            </div>


          </div></CarouselItem>
          <CarouselItem className="basis-1/1"><div className='h-full w-full  bg-transparent text-white pt-60 p-15 relative text-center'>

            <h1 className='font-bold text-center lg:text-5xl xl:text-5xl 2xl:text-5xl font-[Libre] '> Books You Love, Prices You'll Love More</h1>
            <p className='lg:text-xl xl:text-2xl 2xl:text-3xl lg:my-10 font-semibold xl:my-15 2xl:my-20 font-[Fredoka]'>Enjoy amazing discounts on handpicked titles across all categories. Reading has never been this rewarding.</p>
            <div className="flex lg:text-sm xl:text-lg 2xl:text-xl  w-fit font-bold text-black gap-10 mx-auto px-8 relative mt-30   ">

              <button className='relative px-8 py-4 bg-amber-50 hover:cursor-pointer before:content-[""] before:h-[100px] before:w-[100px] before:bg-amber-300 before:top-[-25%] lg:before:left-[-100%] before:absolute before:rounded-full hover:before:scale-600 hover:before:transition-transform before:duration-400 before:transition-timing-function: var(--ease-in-out); overflow-hidden before:opacity-30' ><div className='relative  z-6'>Shop Now</div></button>
              <button className='relative px-8 py-4 bg-amber-500 hover:cursor-pointer before:content-[""] before:h-[100px] before:w-[100px] before:bg-white before:top-[-25%] lg:before:left-[-75%] before:absolute before:rounded-full hover:before:scale-600 hover:before:transition-transform before:duration-400 before:transition-timing-function: var(--ease-in-out); overflow-hidden before:opacity-25' ><div className='relative  z-6'>See What's New</div></button>



            </div>


          </div></CarouselItem>
          <CarouselItem className="basis-1/1"><div className='h-full w-full  bg-transparent text-white pt-60 p-15 relative text-center'>

            <h1 className='font-bold text-center lg:text-5xl xl:text-5xl 2xl:text-5xl font-[Libre] '>Let’s Build Your Perfect Bookshelf</h1>
            <p className='lg:text-xl xl:text-2xl 2xl:text-3xl lg:my-10 font-semibold xl:my-15 2xl:my-20 font-[Fredoka] '>Browse books by your interests, reading level, and more. Every recommendation is tailored just for you.
            </p>
            <div className="flex lg:text-sm xl:text-lg 2xl:text-xl  w-fit font-bold text-black gap-10 mx-auto px-8 relative mt-30   ">

              <button className='relative px-8 py-4 bg-amber-50 hover:cursor-pointer before:content-[""] before:h-[100px] before:w-[100px] before:bg-amber-300 before:top-[-25%] lg:before:left-[-100%] before:absolute before:rounded-full hover:before:scale-600 hover:before:transition-transform before:duration-400 before:transition-timing-function: var(--ease-in-out); overflow-hidden before:opacity-30' ><div className='relative  z-6'>Shop Now</div></button>
              <button className='relative px-8 py-4 bg-amber-500 hover:cursor-pointer before:content-[""] before:h-[100px] before:w-[100px] before:bg-white before:top-[-25%] lg:before:left-[-75%] before:absolute before:rounded-full hover:before:scale-600 hover:before:transition-transform before:duration-400 before:transition-timing-function: var(--ease-in-out); overflow-hidden before:opacity-25' ><div className='relative  z-6'>See What's New</div></button>



            </div>


          </div></CarouselItem>


        </CarouselContent>
      </Carousel>


    </div>

        </>
  )
}

export default Hero2
