"use client"

import React from 'react'
import Bookcard from '../bookcard'
import { arr } from '../../../../backend/Final_Data'
import { useEffect, useState } from 'react'
import PageHeading from '../Headings/PageHeading'



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

        // console.log("loaded");

        // fetchData()
        fetchbook();

    }, [])


    return (
        <div className='w-full h-[100vh] bg-black absolute top-[200vh] text-white after:content-[""] after:h-[1px] after:w-full after:bg-slate-100 after:absolute after:bottom-0 after-left-0'>
            < PageHeading Heading="Top Business" />


             {loaded ? <div className='flex justify-center items-center lg:gap-20 xl:gap-30 w-full mt-15 flex-wrap lg:flex-1/4 '>



                <Bookcard props={Book[0]} />
                <Bookcard props={Book[1]} />
                <Bookcard props={Book[3]} />
                    <Bookcard props={Book[4]} />



            </div> : <></>}




        </div>
    )
}

export default TopBiography
