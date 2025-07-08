"use client"

import React from 'react'
import Bookcard from '../bookcard'

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
            console.log(re);
        })

    }

    useEffect(() => {

        fetchbook();

    }, [])


    return (
        <div className='w-full h-[80vh] bg-black relative top-0 text-white after:content-[""] after:h-[1px] after:w-full after:bg-slate-100 after:absolute after:bottom-0 after-left-0'>
            < PageHeading Heading="New Arrivals" />


            {loaded ? <div className='flex justify-center items-center lg:gap-20 xl:gap-30 w-full mt-15 flex-wrap lg:flex-1/4 '>



                <Bookcard props={Book[0]} />
                <Bookcard props={Book[1]} />
                <Bookcard props={Book[3]} />
                <Bookcard props={Book[4]} />



            </div> : <></>}




        </div>
    )
}

export default NewArrivals
