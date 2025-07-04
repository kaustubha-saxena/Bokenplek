"use client"
import React from 'react'
import PageHeading from './Headings/PageHeading'
import Bookcard from './bookcard'
import { useEffect, useState } from 'react'
const SimilarBooks = ({gen}) => {

console.log("genre:",gen.genre);

    const [Book, setBook] = useState([])
        const [loaded, setloaded] = useState(false)

       
        const fetchbook = async () => {
            let res = await fetch("/api/fetchbook", {
                method: "POST",
                body: JSON.stringify({
                    genre: gen
                })
            })
            let data = await res.json().then((re) => {
    
                setBook(re)
                setloaded(true)
                console.log("re:",re[0]);
            })
    
        }
    
        useEffect(() => {
    
            console.log("loaded");
    
            
            fetchbook();
    
        }, [])
     
    


    return (
        <>

        

            
            {loaded ? <div className='w-full h-[100vh] bg-black  top-[100vh] text-white'>
            < PageHeading Heading="SIMILAR BOOKS" />


            {loaded ? <div className='flex justify-center items-center gap-30 w-full mt-15 flex-wrap '>



                <Bookcard props={Book[0]} />
                <Bookcard props={Book[1]} />
                <Bookcard props={Book[3]} />
                <Bookcard props={Book[4]} />



            </div> : <></>}




        </div> :<></>
            }
            
            

        </>
    )
}

export default SimilarBooks
