import React from 'react'
import Link from 'next/link'
const Footer = () => {
    return (
        <>
            <div className='w-full h-[50vh] relative bottom-0   text-[#EEEEEE] bg-[#212121] after:content-[""] after:h-[3px] after:w-full after:bg-[#F4B400] after:absolute after:top-0 after-left-0'>

                <div className='flex   gap-30  p-10'>
                    <div className='flex-col w-[40%] gap-4  '>
                        <Link href={"/"}><img className="w-40" src="/logo/Logo1.png" alt="" /></Link>
                        <div className='my-4 '><p>Discover the joy of reading with Bookenplek, your trusted online bookstore since 2021. Born out of a love for books, Bookenplek brings you a curated collection of novels, academic texts, and hidden literary gems. Whether you're after new releases or timeless classics, we&apos;re here to make reading more accessible and enjoyable. Join the Bookenplek community and let your next great story begin here!

                        </p></div>
                        <div className='flex gap-6'>
                            <Link href={""}> <img className='w-5' src="/icons/github.png" alt="" /> </Link>
                            <Link href={""}> <img className='w-5' src="/icons/instagram.png" alt="" /> </Link>
                            <Link href={""}> <img className='w-5' src="/icons/x.png" alt="" /> </Link>
                        </div>
                    </div>
                    <div className='flex gap-20'>
                        
                    <div className='flex-col  w-40'>
                        <p className='text-xl font-semibold'>Brand Story</p>
                        <ul className='flex-col my-1 font-medium'>
                            <li><Link href={"/about"}>About Us</Link></li>
                            <li><Link href={"/contact"}>Contact Us</Link></li>

                        </ul>
                    </div>
                    <div className='flex-col  w-40'>
                        <p className='text-xl font-semibold'>Brand Story</p>
                        <ul className='flex-col my-1 font-medium'>
                            <li><Link href={"/about"}>About Us</Link></li>
                            <li><Link href={"/contact"}>Contact Us</Link></li>

                        </ul>
                    </div>
                    <div className='flex-col w-40 '>
                        <p className='text-xl font-semibold'>Brand Story</p>
                        <ul className='flex-col my-1 font-medium'>
                            <li><Link href={"/about"}>About Us</Link></li>
                            <li><Link href={"/contact"}>Contact Us</Link></li>

                        </ul>
                    </div>

                    </div>

                </div>
                <div className='w-full   h-20 absolute bottom-0 p-6'>
                    Copyright | All Rights Reserved, Bookenplek
                </div>
            </div>
        </>
    )
}

export default Footer
