import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SearchCard from './cards/SearchCard'
import { motion, AnimatePresence } from 'framer-motion'
const Menu = ({ menu, setmenu }) => {




    const [book, setbook] = useState([])
    const [loaded, setloaded] = useState(false)

    const [search, setsearch] = useState("")



    const fetchbook = async () => {
        let res = await fetch("/api/fetchbook", {
            method: "POST",
            body: JSON.stringify({})
        })
        let data = await res.json().then((re) => {

            setbook(re)
            setloaded(true)

            // console.log("leeeengthhhhh", re.length);

        })

    }



    const handlemenu = () => {



        setmenu(!menu)
    }
    const handleSearch = (e) => {
        setsearch(e.target.value)
    }

    useEffect(() => {
        fetchbook()



    }, [search])



    return (
        <>
            <AnimatePresence>

                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "tween", duration: 0.3 }}
                    className="fixed top-0 left-0 w-[80vw]  h-full bg-[#548478] text-white z-100 "
                >

                    <div className='w-[80vw] h-[100vh] bg-[#212121] text-white absolute z-100 p-5 text-xl '>
                        <div className='w-full h-15 flex items-center justify-end '>
                            <button onClick={handlemenu}>

                                <Image src={"/icons/cross.png"}
                                    width={40}
                                    height={40}
                                    alt='cross'
                                />
                            </button>

                        </div>
                        <ul className='flex flex-col gap-10 my-5 font-medium '>
                            <li>  <div className=' w-full h-10  relative'>

                                <input className=' rounded-full  w-full  border-none  px-1 py-1 focus:outline-none text-white bg-transparent placeholder:text-gray-300 ' value={search} onChange={handleSearch} type="text" name="search" id="search" placeholder='Search...' />


                                {
                                    loaded && search != "" ? <>

                                        <div className='w-full h-fit max-h-90 overflow-hidden  flex flex-col gap-3 bg-[#212121] absolute md:top-7 top-10 left-0 p-2  z-150'>
                                            {

                                                book.map((item, count = 0) => {
                                                    if (item.title?.toLowerCase().includes(search.toLowerCase())) {
                                                        console.log(item);


                                                        return (

                                                            <SearchCard key={item._id} params={item} setsearch={setsearch} setmenu={setmenu}/>

                                                        )

                                                    }

                                                })
                                            }
                                        </div>

                                    </> : <></>
                                }
                            </div>
                            </li>

                            <li>
                                <Link href={"/"} onClick={handlemenu} className='flex justify-start px-4'>
                                    Home

                                </Link>
                            </li>
                            <li>
                                <Link href={"/bestseller"} onClick={handlemenu} className='flex justify-between px-4'>
                                    BestSeller

                                </Link>
                            </li>
                            <li>
                                <Link href={"/genre"} onClick={handlemenu} className='flex justify-between px-4'>
                                    Genre

                                </Link>
                            </li>
                            <li>
                                <Link href={"/about"} onClick={handlemenu} className='flex justify-between px-4'>
                                    About Us

                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} onClick={handlemenu} className='flex justify-between px-4'>
                                    Login

                                </Link>
                            </li>
                        </ul>
                    </div>
                </motion.div>

            </AnimatePresence>
        </>
    )
}

export default Menu
