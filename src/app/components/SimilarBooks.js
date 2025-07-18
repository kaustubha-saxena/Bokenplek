"use client"
import React from 'react'
import PageHeading from './Headings/PageHeading'
import Bookcard from './cards/bookcard'
import { useEffect, useState } from 'react'
const SimilarBooks = ({ props }) => {

    console.log("genre:", props[0], props[1]);

    const [Book, setBook] = useState([])
    const [loaded, setloaded] = useState(false)


    const fetchbook = async () => {
        let res = await fetch("/api/fetchbook", {
            method: "POST",
            body: JSON.stringify({
                genre: props[0]
            })
        })
        let data = await res.json().then((re) => {

            setBook(re)
            setloaded(true)
        })

    }

    useEffect(() => {

        fetchbook();

    }, [])




    return (
        <>




            {loaded ? <div className='w-full h-fit bg-transparent relative text-white'>
                < PageHeading Heading="SIMILAR BOOKS" />


                {loaded ? <div className=' sm:px-5 px-3 flex justify-center items-center gap-y-6 gap-x-3 sm:gap-5  md:gap-5 lg:gap-10 xl:gap-10   w-full mt-8 flex-wrap lg:flex-1/4'>


                    {

                        Book.map((item, count = 0) => {

                            if (item.title != props[1] && count <= 5) {
                                count = count + 1;
                                return <Bookcard key={item.isbn} props={item} />
                            }

                        })}



                </div> : <></>}




            </div> : <></>
            }



        </>
    )
}

export default SimilarBooks
