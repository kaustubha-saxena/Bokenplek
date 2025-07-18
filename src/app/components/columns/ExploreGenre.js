"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import GenreCard from '../cards/GenreCard'
const ExploreGenre = () => {

    const [genre, setgenre] = useState([])
    const [loaded, setloaded] = useState(false)
    const fetchgenre = async () => {
        let res = await fetch("/api/fetchheader", {
            method: "POST",
            body: JSON.stringify({})
        })
        let data = await res.json().then((result) => {

            setgenre(result)
            setloaded(true)
        })
    }

    useEffect(() => {
        fetchgenre();
    }, [])

    return (




        <>
        <div className='hidden sm:block'>

            {loaded ? <><div className='flex-col  pt-3 '>

                <h1 className='text-white font-bold text-4xl mx-4 font-[Libre] text-center my-6 mt-10'>Pick a Genre, Start Your Journey</h1>
                <div className=' flex gap-3 px-4 md:py-3 lg:py-5 xl:py-7 w-full h-fit bg-[#212121] overflow-x-auto overflow-y-hidden no-scrollbar '>



                    {genre.map(item => {
                        return <GenreCard key={item._id} props={item} />
                    })
                }


                </div>
            </div>
            </> : <></>}
                </div>
        </>
    )
}

export default ExploreGenre
