import React from 'react'
import Link from 'next/link'
const SearchCard = ({ params, setsearch,setmenu }) => {


    return (
        <>
            <Link  href={`/bookpage?isbn=${params.isbn}`} onClick={() => {
                setmenu(false)
                setsearch("")

            }} >


                <div className='w-full h-15 flex justify-start gap-2 '>

                    <img className='h-full w-fit' src={`/books/${params.genre}/${params.imgName}.png`} alt="" />
                    <div className=''>
                        <p className='text-sm sm:text-base md:text-base'>{params.title}</p>
                        <p className='text-xs sm:text-sm md:text-sm'>{params.author}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default SearchCard
