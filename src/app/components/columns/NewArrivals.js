"use client"

import React from 'react'
import Bookcard from '../cards/bookcard'

import { useEffect, useState } from 'react'
import PageHeading from '../Headings/PageHeading'



const NewArrivals = () => {

    const [Book, setBook] = useState([])
    const [loaded, setloaded] = useState(false)
    const fetchbook = async () => {
        let res = await fetch("/api/fetchbook", {
            method: "POST",
            body: JSON.stringify({
                releaseYear: { $gt: 2000 }
            })
        })
        let data = await res.json().then((re) => {

            setBook(re)
            setloaded(true)
            console.log(re.length);
        })

    }

    useEffect(() => {

        fetchbook();

    }, [])


    return (
        <div className='w-full h-fit py-5  relative top-0 text-white '>
            < PageHeading Heading="New Arrivals" />


            {loaded ? <div className='sm:px-0 px-3 flex justify-center items-center gap-y-6 gap-x-3 sm:gap-4  md:gap-5 lg:gap-10 xl:gap-10   w-full mt-8 flex-wrap lg:flex-1/4'>



                <Bookcard props={Book[0]} />
                <Bookcard props={Book[1]} />
                <Bookcard props={Book[2]} />
                <Bookcard props={Book[3]} />
                <span className='hidden md:block'>

                <Bookcard  props={Book[4]}  />
                </span>



            </div> : <>
            <div className='flex justify-center items-center  md:gap-5 lg:gap-10 xl:gap-10   w-full mt-15 flex-wrap lg:flex-1/4 '>



                


            </div>
            
            </>}




        </div>
    )
}

export default NewArrivals
