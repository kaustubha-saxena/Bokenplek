import React from 'react'

const PageHeader = ({ params }) => {
    console.log(params.tagline);

    return (
        <>
            <div className='h-[70vh] w-full  bg-transparent relative top-0  overflow-hidden '>
                <img className=' w-full h-full object-cover ' src={`/header/${params.genre}.jpg`} alt="" />

<div className='w-full h-full opacity-45 bg-black absolute top-0'>

</div>
                <div className='absolute   text-white  top-0  w-full h-full text-center pt-40 ' >
                    
                        <h1 className='font-bold  lg:text-5xl xl:text-5xl 2xl:text-5xl font-[Libre] '> {params.header}
                        </h1>
                        <p className='lg:text-xl xl:text-2xl 2xl:text-3xl lg:my-10 font-semibold my-10 font-[Fredoka]'> {params.tagline}</p>
                    
                </div>
            </div>
        </>
    )
}

export default PageHeader
