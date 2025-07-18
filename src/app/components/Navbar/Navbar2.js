"use client"
import React, { use, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import SearchCard from '../cards/SearchCard'
import { useSelector, useDispatch, useStore } from 'react-redux'
import Menu from '../menu'
import { Button } from '@/components/ui/button'




const Navbar2 = () => {
  const [search, setsearch] = useState("")
  const [book, setbook] = useState([])
  const [loaded, setloaded] = useState(false)
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [menu, setmenu] = useState(false)
  let qty = 0

  const handlemenu = () => {
    setmenu(!menu)

  }
  const handleSearch = (e) => {
    setsearch(e.target.value)
  }

  cartItems.forEach(element => {
    qty = qty + element.quantity

  });
  const searchInputRef = useRef(null);

  const fetchbook = async () => {
    let res = await fetch("/api/fetchbook", {
      method: "POST",
      body: JSON.stringify({})
    })
    let data = await res.json().then((re) => {

      setbook(re)
      setloaded(true)
      // console.log("leeeengthhhhh", re.length);

    })

  }
  useEffect(() => {
    fetchbook()



  }, [search])

  return (
    <>

      <nav className="  justify-between items-center w-[100%] h-1  p-8  absolute    top-0   text-white z-99 hidden  md:flex " >


        <div className='flex  items-center  justify-start lg:w-1/2  md:w-[40%]  md:gap-10'>
          <Link href={"/"} >
            <Image src="/logo/Logo1.png" alt='Logo' width={100} height={100} className=' hover:cursor-pointer  xl:w-[180px]  lg:w-[150px]' />
          </Link>


          <div className='flex items-center justify-center   max-w-1/2  relative '>
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
<div className='relative'>

            <input className=' rounded-full    border-none  px-1 py-1 focus:outline-none text-white bg-transparent placeholder:text-gray-300 ' value={search} onChange={handleSearch} type="text" name="search" id="search" placeholder='Search...' ref={searchInputRef} />


            {
              loaded  && search!=""? <>
           
                <div className='w-90 h-fit max-h-115 overflow-hidden flex flex-col gap-3 bg-[#212121] absolute md:top-7 left-0 p-2 '>
                      {
                        
                        book.map((item, count = 0) => {
                          if (item.title?.toLowerCase().includes(search.toLowerCase())) {
                            return (
                              
                              <SearchCard key={item._id} params={item} setsearch={setsearch} />
                              
                            )
                            
                          }
                          
                        })
                      }
                    </div>

              </> : <></>
            }
            </div>

          </div>
        </div>

        <ul className="flex justify-center items-center gap-4 font-normal md:text-sm  lg:text-base xl:text-lg text-gray-300 ">
         
          <li className='hover:font-bold hover:cursor-pointer  '><Link href="/">Home</Link></li>
          <li className='hover:font-bold hover:cursor-pointer'><Link href="/bestseller">Best Seller</Link></li>
          {/* <li className='hover:font-bold hover:cursor-pointer'><Link href="/dashboard">New Arrivals</Link></li> */}
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
        <Menu menu={menu} setmenu={setmenu} />
      )
      }




      <nav className='flex justify-between items-center w-[100%] h-1 absolute top-0 text-white z-99 p-8 block md:hidden '>
        <div >
          <button onClick={handlemenu}>

            <Image src="/icons/menu.svg" alt='Logo' width={100} height={100} className=' hover:cursor-pointer  sm:w-[25px]  w-[20px]' />
          </button>
        </div>
        <div><Link href={"/"} >
          <Image src="/logo/Logo1.png" alt='Logo' width={100} height={100} className=' hover:cursor-pointer w-[150px] sm:w-[180px] md:w-[180px]  xl:w-[180px]  lg:w-[150px]' />
        </Link></div>


        <Link href="/cart" className='relative'>
          <lord-icon
            src="https://cdn.lordicon.com/ggirntso.json"
            stroke="bold"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff"
            width={100}
            height={100}
            className="cursor-pointer "
          >
          </lord-icon>
          <div className='h-4 w-4 rounded-full bg-amber-200 absolute top-[-5px] right-[-5px] flex justify-center items-center   text-[#2a2a2a] text-xs font-bold'>{qty}</div>
        </Link>

      </nav>
    </>
  )
}

export default Navbar2
