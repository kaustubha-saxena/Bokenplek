"use client"
import React from 'react'
import Bookcard from '../components/bookcard'
import Navbar2 from '../components/Navbar/Navbar'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
const page = () => {

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


<div className='w-full px-6 py-10  '>

    {loaded ? <div className='flex justify-center items-center lg:gap-x-20 xl:gap-x-30 lg:gap-y-15 xl:gap-y-20  w-full flex-wrap lg:flex-1/4 '>



                

                {
                  Book.map(book=>{
                    return <Bookcard key={book._id} props={book} />
                  })
                }



            </div> : <></>}
    
</div>

    </>
  )
}

export default page
