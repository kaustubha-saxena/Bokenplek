"use client"
import React from 'react'
import Bookcard from '../components/cards/bookcard'

import Fiction from '../components/BestSeller/Fiction'
import NonFiction from '../components/BestSeller/NonFiction'
import Religion from '../components/BestSeller/Religion'

import { useEffect, useState } from 'react'
import Image from 'next/image'
const BeastSeller = () => {

  const [Book, setBook] = useState([])
  const [loaded, setloaded] = useState(false)

const [genre, setgenre] = useState([
        {
            genre: "adventure",
            checked: false,
            qty: 0,
        },
        {
            genre: "biography",
            checked: false,
            qty: 0,
        },
        {
            genre: "business-and-economics",
            checked: false,
            qty: 0,
        },
        {
            genre: "crime",
            checked: false,
            qty: 0,
        },
        {
            genre: "data-analysis",
            checked: false,
            qty: 0,
        },
        {
            genre: "drama-and-plays",
            checked: false,
            qty: 0,
        },
        {
            genre: "engineering",
            checked: false,
            qty: 0,
        },
        {
            genre: "fantasy",
            checked: false,
            qty: 0,
        },
        {
            genre: "health-and-wellness",
            checked: false,
            qty: 0,
        },
        {
            genre: "history",
            checked: false,
            qty: 0,
        },
        {
            genre: "horror",
            checked: false,
            qty: 0,
        },
        {
            genre: "investment",
            checked: false,
            qty: 0,
        },
        {
            genre: "mystery",
            checked: false,
            qty: 0,
        },
        {
            genre: "philosophy-technology",
            checked: false,
            qty: 0,
        },
        {
            genre: "religion-and-spirituality",
            checked: false,
            qty: 0,
        },
        {
            genre: "romance",
            checked: false,
            qty: 0,
        },
        {
            genre: "science",
            checked: false,
            qty: 0,
        },
        {
            genre: "science-fiction",
            checked: false,
            qty: 0,
        },
        {
            genre: "self-help",
            checked: false,
            qty: 0,
        },
        {
            genre: "thriller",
            checked: false,
            qty: 0,
        },
    ])

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
    })

  }

  useEffect(() => {
    fetchbook();
  }, [])




  return (
    <>



    

      <div className='w-[100vw] relative '>
        <div className=' mt-20 flex justify-end px-15 relative z-99'>
            
        </div>
        {loaded ? <div className='flex  justify-center h-fit items-center lg:gap-10 xl:gap-10  w-[100%] flex-wrap lg:flex-1/4 py-10 px-15 '>

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

export default BeastSeller;
