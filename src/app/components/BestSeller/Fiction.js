"use client"
import React, { useEffect, useState } from 'react'
import Bookcard from '../cards/bookcard'
import PageHeading from '../Headings/PageHeading'
import Link from 'next/link'
const Fiction = () => {
  const [Book, setBook] = useState([])
  const [loaded, setloaded] = useState(false)
  const Fetchbook = async () => {
    let res = await fetch("/api/fetchbook", {
      method: "POST",
      body: JSON.stringify({ type: "Fiction", rating: { $gt: 4.7 }, tag: "Best Seller" })
    })
    await res.json().then((result) => {
      setBook(result);
      console.log(result);
      setloaded(true)
    })

  }

  useEffect(() => {

    Fetchbook();

  }, [])


  return (
    <>
      <div className='w-full h-fit py-5  mt-10 relative top-0 text-white '>

        <div>

                    < PageHeading Heading="Top Fiction" />
                    <div className='absolute top-10 right-5 font-medium  lg:text-xs xl:text-sm text-gray-300 hover:font-bold hover:cursor-pointer'>
                        <Link href={"/collection?genre=fiction"}>View All
                        </Link>
                    </div>
                </div>

        {loaded ? <div className='flex justify-center items-center  md:gap-5 lg:gap-10 xl:gap-10   w-full mt-15 flex-wrap lg:flex-1/4 '>



          <Bookcard props={Book[0]} />
          <Bookcard props={Book[1]} />
          <Bookcard props={Book[2]} />
          <Bookcard props={Book[3]} />
          <Bookcard props={Book[4]} />



        </div> : <></>}




      </div>
    </>
  )
}

export default Fiction
