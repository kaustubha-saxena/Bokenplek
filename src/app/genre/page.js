"use client"
import React from 'react'
import GenrePageCard from '../components/cards/GenrePageCard'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import PageHeading from '../components/Headings/PageHeading';
const Genre = () => {


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
            {loaded ? <><div className='flex-col  pt-3 w-full'>

                
                
                 <div className='text-white  mx-4  my-6 mt-10'>
                    < PageHeading Heading="Explore All Genre" />
                    </div>   
                    
                <div className=' flex flex-wrap justify-center items-center mx-auto gap-5  md:py-3 lg:py-5 xl:py-7 w-full h-fit bg-[#212121] flex-1/1'>
          



                    {genre.map(item => {

                        return (
                            <><motion.div
                                key={genre.slug}
                                initial={{ opacity: 0, y: 30,scale:0.95 }}
                                animate={{ opacity: 1, y: 0,scale:1}}
                                transition={{ delay: item.index*5, duration: 1 }}
                            >
                                <GenrePageCard key={item._id} props={item} />
                            </motion.div>
                            </>
                        )
                    })
                    }


                </div>
            </div>
            </> : <></>}
        </>
    )
}

export default Genre
