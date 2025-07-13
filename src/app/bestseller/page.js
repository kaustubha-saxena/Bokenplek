"use client"
import React from 'react'
import Bookcard from '../components/cards/bookcard'
import Navbar2 from '../components/Navbar/Navbar'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
const Page = ()=> {

  
const searchParams = useSearchParams();
    const isbn = searchParams.get('genre');

const [Book, setBook] = useState([])
    const [loaded, setloaded] = useState(false)
    const fetchbook = async () => {
        let res = await fetch("/api/fetchbook", {
            method: "POST",
            body: JSON.stringify({
                 tag: "Best Seller"
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
    <Navbar2/>


<div className='w-[100vw]   '>

    {loaded ? <div className='flex justify-center items-center lg:gap-10 xl:gap-10  w-[100%] flex-wrap lg:flex-1/4 py-10 px-15 '>

            {
              Book.map(book => {
                return <Bookcard key={book._id} props={book} />
              })
            }

          </div> : <></>}
    
</div>

    </>
  )
}

export default Page
