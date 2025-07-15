import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion,  AnimatePresence } from 'framer-motion'
const Menu = ({menu,setmenu}) => {

const handlemenu=()=>{
setmenu(!menu)
}

  return (
    <>
     <AnimatePresence>

 <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 w-[80vw]  h-full bg-[#548478] text-white z-100 "
          >

    <div className='w-[80vw] h-[100vh] bg-[#212121] text-white absolute z-100 p-5 text-xl '>
        <div className='w-full h-15 flex items-center justify-end '>
            <button onClick={handlemenu}>

            <Image src={"/icons/cross.png"}
            width={40}
            height={40}
            alt='cross'
            />
            </button>
            
        </div>
        <ul className='flex flex-col gap-10 my-5 font-medium'>
            <li>
                <Link href={"/"} onClick={handlemenu} className='flex justify-start px-4'>
                Home
                
                </Link>
            </li>
            <li>
                <Link href={"/bestseller"} onClick={handlemenu} className='flex justify-between px-4'>
                BestSeller
                
                </Link>
            </li>
            <li>
                <Link href={"/genre"} onClick={handlemenu} className='flex justify-between px-4'>
                Genre
                
                </Link>
            </li>
            <li>
                <Link href={"/about"} onClick={handlemenu} className='flex justify-between px-4'>
                About Us
                
                </Link>
            </li>
            <li>
                <Link href={"/"} onClick={handlemenu} className='flex justify-between px-4'>
                Login
               
                </Link>
            </li>
        </ul>
    </div>
</motion.div>
            
            </AnimatePresence>
    </>
  )
}

export default Menu
