"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import Navbar2 from '@/app/components/Navbar/Navbar2'
import SimilarBooks from '../components/SimilarBooks';

const page = ({ params }) => {

    const searchParams = useSearchParams();
    const isbn = searchParams.get('isbn');
    const [book, setBook] = useState([])
    const [loaded, setloaded] = useState(false)

    const fetchbook = async function () {


        let res = await fetch("/api/fetchbook", {
            method: "POST",
            body: JSON.stringify({ isbn: isbn })
        })
        let data = await res.json().then((re) => {

            setBook(re[0])
            console.log(re);
            
            setloaded(true)
        })
        console.log("data loaded by isbn");
        console.log(book);


    }
    useEffect(() => {
        fetchbook();




    }, [isbn])


    return (
        <>
            <Navbar2 />
            
            {loaded ? <> <div className='flex py-10 px-20 w-full h-[80vh] text-white bg-black'>
                <div className='w-[40%]  flex justify-center items-center '>


                    <img className=' mx-auto h-[80%] ' src={`/books/${book.genre}/${book.imgName}.png`}   alt="" />

                </div>
                <div className='p-8   flex-col h-full w-[60%]'>
                    <div className='my-4'>
                        <h3 className='text-4xl font-bold font-[Fredoka]'>{book.title}</h3>
                        <p className='font-semibold'>Author: {book.author}</p>
                        <p className='font-semibold'>{book.rating}</p>
                    </div>
                    <div className='flex my-4 gap-5  items-center'>
                        <p className='text-3xl font-bold'>₹{book.priceAfterDiscount}</p>
                        <p className=' text-lg font-semibold'><strike>₹{book.mrp}</strike></p>
                    </div>
                    <div className='my-6'>
                        <p>Description: {book.description}</p>
                    </div>
                    <div className='flex my-8 gap-3 text-black font-bold '>
                        <button className='px-10 py-3 bg-amber-500 text-lg hover:cursor-pointer'>Add to Cart</button>
                        <button className='px-10 py-3 bg-amber-500 text-lg hover:cursor-pointer'>Buy Now</button>
                    </div>

                </div>
            </div>

                <div className='w-full h-fit py-4 px-50 bg-black text-white'>
                    <h3 className='text-3xl font-bold my-3'>Product Details</h3>
                    <div className='flex gap-10 px-10 my-6  text-lg'>
                        <div className='font-semibold'>
                            <ul>
                                <li>Title: </li>
                                <li>Author: </li>
                                <li>Genre: </li>
                                <li>ISBN: </li>
                                <li>Publisher: </li>
                                <li>Type: </li>
                                <li>Page Count: </li>
                                <li>Dimension: </li>
                                <li>Weight: </li>
                                <li>Release Year: </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>{book.title} </li>
                                <li>{book.author} </li>
                                <li>{book.genre} </li>
                                <li>{book.isbn} </li>
                                <li>{book.publisher} </li>
                                <li>{book.type} </li>
                                <li>{book.pageCount} </li>
                                <li>{book.dimensions} </li>
                                <li>{book.weight} </li>
                                <li>{book.releaseYear} </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>

                <SimilarBooks gen={book.genre}/>

            </> : <></>}




        </>
    )
}

export default page
