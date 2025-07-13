"use client"

import React from 'react'
import Bookcard from '../cards/bookcard'
import { useEffect, useState } from 'react'
import PageHeading from '../Headings/PageHeading'
import Link from 'next/link'




const TopBiography = () => {

    const [Book, setBook] = useState([])
    const [loaded, setloaded] = useState(false)
    const fetchbook = async () => {
        let res = await fetch("/api/fetchbook", {
            method: "POST",
            body: JSON.stringify({
                genre: "biography"
            })
        })
        let data = await res.json().then((re) => {

            setBook(re)
            setloaded(true)
            console.log(re);
        })

    }

    useEffect(() => {
        fetchbook();

    }, [])


    return (

        <>

            <div className='w-full h-fit py-5 relative top-0 text-white after:content-[""] after:h-[1px] after:w-full after:bg-slate-100 after:absolute after:bottom-0 after-left-0'>
                <div>

                    < PageHeading Heading="Top Biographies" />
                     <div className='absolute top-10 right-5 font-medium  lg:text-xs xl:text-sm text-gray-300 hover:font-bold hover:cursor-pointer'>
                   <Link href={"/collection?genre=biography"}>View All
                   </Link> 
                </div>
                </div>

                


                {loaded ? <div className='flex justify-center items-center  md:gap-5 lg:gap-10 xl:gap-10   w-full mt-15 flex-wrap lg:flex-1/4 '>




                    <Bookcard props={Book[0]} />
                    <Bookcard props={Book[1]} />
                    <Bookcard props={Book[2]} />
                    <Bookcard props={Book[3]} />
                    <Bookcard props={Book[4]} />
                    
                </div>

                    : <></>}
               



            </div>
        </>
    )
}

export default TopBiography
