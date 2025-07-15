"use client"
import React, { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import Menu from '../menu'



const Navbar2 = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
const [menu, setmenu] = useState(false)
  let qty = 0

  const handlemenu=()=>{
    setmenu(!menu)

  }

  cartItems.forEach(element => {
    qty = qty + element.quantity

  });
  const searchInputRef = useRef(null);


  return (
    <>

      <nav className="  justify-between items-center w-[100%] h-1  p-8  absolute    top-0   text-white z-99 hidden  md:flex " >


        <div className='flex  items-center  justify-start lg:w-1/2  md:w-[40%]  md:gap-10'>
          <Link href={"/"} >
            <Image src="/logo/Logo1.png" alt='Logo' width={100} height={100} className=' hover:cursor-pointer  xl:w-[180px]  lg:w-[150px]' />
          </Link>


          <div className='flex items-center justify-center  w-1/2 '>
            <button onClick={() => {
              searchInputRef.current.focus()

            }}>

              <lord-icon
                src="https://cdn.lordicon.com/wjyqkiew.json"
                trigger="hover"
                stroke="bold"
                state="hover-rotation"
                colors="primary:#ffffff,secondary:#b4b4b4"
                width={80}
                height={80}
                className="cursor-pointer scale-75">


              </lord-icon>
            </button>

            <input className=' rounded-full    border-none  px-1 py-1 focus:outline-none text-white bg-transparent placeholder:text-gray-300 ' type="text" name="search" id="search" placeholder='Search...' ref={searchInputRef} />
          </div>
        </div>
        <ul className="flex justify-center items-center gap-4 font-normal md:text-sm  lg:text-base xl:text-lg text-gray-300 ">
          <li className='hover:font-bold hover:cursor-pointer  '><Link href="/">Home</Link></li>
          <li className='hover:font-bold hover:cursor-pointer'><Link href="/bestseller">Best Seller</Link></li>
          <li className='hover:font-bold hover:cursor-pointer'><Link href="/dashboard">New Arrivals</Link></li>
          <li className='hover:font-bold hover:cursor-pointer'><Link href="/genre">Genre</Link></li>
          <li  ><button className=' rounded-md px-2 py-1 font-bold hover:cursor-pointer  hover:bg-amber-200 bg-amber-200 text-black'>Login</button></li>
          <li className='relative'><Link href="/cart">
            <lord-icon
              src="https://cdn.lordicon.com/ggirntso.json"
              stroke="bold"
              trigger="hover"
              colors="primary:#ffffff,secondary:#ffffff"
              width={100}
              height={100}
              className="cursor-pointer"
            >
            </lord-icon>
          </Link> <div className='h-4 w-4 rounded-full bg-amber-200 absolute top-[-5px] right-[-5px] flex justify-center items-center   text-[#2a2a2a] text-xs font-bold'>{qty}</div> </li>
        </ul>


      </nav >
 {menu && (
      <Menu menu={menu} setmenu={setmenu}/>
    )}

      <nav className='flex justify-between items-center w-[100%] h-1 absolute top-0 text-white z-99 p-8 block md:hidden '>
        <div >
          <button onClick={handlemenu}>

            <Image src="/icons/menu.svg" alt='Logo' width={100} height={100} className=' hover:cursor-pointer  sm:w-[25px]  w-[20px]' />
          </button>
        </div>
        <div><Link href={"/"} >
          <Image src="/logo/Logo1.png" alt='Logo' width={100} height={100} className=' hover:cursor-pointer sm:w-[150px] md:w-[180px]  xl:w-[180px]  lg:w-[150px]' />
        </Link></div>


        <Link href="/cart" className='relative'>
          <lord-icon
            src="https://cdn.lordicon.com/ggirntso.json"
            stroke="bold"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff"
            width={100}
            height={100}
            className="cursor-pointer"
          >
          </lord-icon>
          <div className='h-4 w-4 rounded-full bg-amber-200 absolute top-[-5px] right-[-5px] flex justify-center items-center   text-[#2a2a2a] text-xs font-bold'>{qty}</div>
        </Link>

      </nav>
    </>
  )
}

export default Navbar2
