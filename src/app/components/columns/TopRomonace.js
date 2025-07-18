"use client"

import React from 'react'
import Bookcard from '../cards/bookcard'
import { useEffect, useState } from 'react'
import PageHeading from '../Headings/PageHeading'
import Link from 'next/link'

const TopRomance = () => {

    const [Book, setBook] = useState([])
    const [loaded, setloaded] = useState(false)
    const fetchbook = async () => {
        let res = await fetch("/api/fetchbook", {
            method: "POST",
            body: JSON.stringify({
                genre: "romance"
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

            <div className='w-full h-fit py-5 relative top-0 text-white  bg-[#212121]'>
                <div>

                    < PageHeading Heading="Top Romance" />
                    <div className='absolute top-10 right-5 font-medium  lg:text-xs xl:text-sm text-gray-300 hover:font-bold hover:cursor-pointer'>
                        <Link href={"/collection?genre=biography"}>View All
                        </Link>
                    </div>
                </div>




                {loaded ? <div className='sm:px-5 px-3 flex justify-center items-center gap-y-6 gap-x-3 sm:gap-5  md:gap-5 lg:gap-10 xl:gap-10   w-full mt-8 flex-wrap lg:flex-1/4'>




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

export default TopRomance
