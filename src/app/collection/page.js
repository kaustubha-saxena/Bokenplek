"use client"
import React from 'react'
import Bookcard from '../components/cards/bookcard'
import Navbar2 from '../components/Navbar/Navbar2'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import PageHeading from '../components/Heros/Header'
import Link from 'next/link'
const Page = () => {

  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  // const [genre, setgenre] = useState(searchParams.get('genre'))
  const [Book, setBook] = useState([])
  const [Header, setHeader] = useState([])
  const [loaded, setloaded] = useState(false)
  const fetchbook = async () => {
    let res = await fetch("/api/fetchbook", {
      method: "POST",
      body: JSON.stringify({ genre: genre })
    })
    let data = await res.json().then((result) => {

      setBook(result)
      // console.log("result",result);

      setloaded(true)
    })

    res = await fetch("/api/fetchheader", {
      method: "POST",
      body: JSON.stringify({ genre: genre })
    })
    data = await res.json().then((result) => {

      setHeader(result[0])


      setloaded(true)
    })




  }

  useEffect(() => {
    fetchbook();
  }, [])




  return (
    <>
      

      <PageHeading params={Header} />
      <div className='w-full   '>

        {loaded ? <>
          <div className='text-white  pt-8 px-4'>
            <Link className=' hover:underline ' href={"/"}>Home </Link>&gt;
            <Link className='hover:underline' href={"/genre"}>Genre </Link> &gt;
            <Link className='hover:underline' href={`/collection?genre=${genre}`}>{genre}</Link>
          </div>
          <div className='flex justify-center items-center lg:gap-10 xl:gap-10  w-screen flex-wrap lg:flex-1/4 py-10 px-15 '>

            {
              Book.map(book => {
                return <Bookcard key={book._id} props={book} />
              })
            }

          </div></> : <>
          
        </>}

      </div>

    </>
  )
}

export default Page
