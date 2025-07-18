import React from 'react'

const PageHeading = ({Heading}) => {
  return (
    <div className='pt-5 text-xl font-serif sm:text-2xl lg:text-2xl xl:text-3xl font-bold flex justify-center ' >

                <span className='mx-auto text-white relative  '>{Heading}</span>
            </div>
  )
}

export default PageHeading
