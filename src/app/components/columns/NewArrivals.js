"use client"

import React from 'react'
import Bookcard from '../bookcard'
import { arr } from '../../../../backend/Final_Data'
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

        // console.log("loaded");

        // fetchData()
        fetchbook();

    }, [])


    return (
        <div className='w-full h-[100vh] bg-black absolute top-[100vh] text-white'>
            < PageHeading Heading="New Arrivals" />


            {loaded ? <div className='flex justify-center items-center gap-30 w-full mt-15 flex-wrap '>



                <Bookcard props={Book[0]} />
                <Bookcard props={Book[1]} />
                <Bookcard props={Book[3]} />
                <Bookcard props={Book[4]} />



            </div> : <></>}




        </div>
    )
}

export default NewArrivals
