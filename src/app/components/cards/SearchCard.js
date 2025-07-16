import React from 'react'
import Link from 'next/link'
const SearchCard = ({params, setsearch}) => {
   
    
    return (
        <>
        <Link href={`/bookpage?isbn=${params.isbn}`} onClick={()=>{
            setsearch("")
        }} >
        

            <div className='w-full h-20 flex justify-start gap-2'>

                <img className='h-full w-fit' src={`/books/${params.genre}/${params.imgName}.png`} alt="" />
                <div>
                    <p>{params.title}</p>
                    <p>{params.author}</p>
                </div>
            </div>
        </Link>
        </>
    )
}

export default SearchCard
