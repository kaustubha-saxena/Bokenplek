"use client"
import React, { useEffect , useState} from 'react'
import Bookcard from '../cards/bookcard'
import PageHeading from '../Headings/PageHeading'
const Religion = () => {
const [Book, setBook] = useState([])
const [loaded, setloaded] = useState(false)
const Fetchbook=async()=>{
  let res= await fetch("/api/fetchbook",{
    method:"POST",
    body:JSON.stringify({genre:"religion-and-spirituality",rating:{$gt:4.3}, tag:"Best Seller"})
  })
  await res.json().then((result)=>{
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
    <div className='w-full h-fit py-5  relative top-0 text-white  '>
           < PageHeading Heading="Top Religion" />


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

export default Religion
