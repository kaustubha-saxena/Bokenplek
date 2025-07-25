import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
const PageHeader = ({ params }) => {
    console.log(params.tagline);

    return (
        <>
            <div className='h-[510px] max-h-[50vh] w-full  bg-transparent relative top-0  overflow-hidden '>

                <Image
                    src={`/header/${params.genre}.jpg`}
                    fill
                    style={{
                        objectFit: 'cover',
                    }}
                />
                <div className='w-full h-full opacity-45 bg-black absolute top-0'>

                </div>


                <motion.div
                    key={4}
                    initial={{ opacity: 0, y: 30  }}
                    animate={{ opacity: 1, y: 0}}
                    transition={{ delay: 0, duration: 2 }}>
                <div className='absolute   text-white  top-0 px-5 w-full h-full text-center pt-40 ' >

                    <h1 className='font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-[Libre] '> {params.header}
                    </h1>
                    <p className=' text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl lg:my-10 font-semibold my-10 font-[Fredoka]'> {params.tagline}</p>

                </div>
                     </motion.div>

            </div>
        </>
    )
}

export default PageHeader
