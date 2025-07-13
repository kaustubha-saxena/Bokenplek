// "use client";
// import React from 'react'
// import { useEffect, useState } from 'react'
// import { useSearchParams } from 'next/navigation';
// import SimilarBooks from '../components/SimilarBooks';
// import { useSelector, useDispatch } from 'react-redux'
// import { addToCart } from '../Redux/cartslice';
// import { Suspense } from 'react'
// import { toast } from 'react-toastify';
// const Page = ({ params }) => {

//     const cartItems = useSelector((state) => state.cart.cartItems);

//     const dispatch = useDispatch();
//     const searchParams = useSearchParams();
//     const isbn = searchParams.get('isbn');
//     const [book, setBook] = useState([])
//     const [loaded, setloaded] = useState(false)
//     console.log("book", book);

//     const handleAdd = () => {
//         console.log('added');
//         toast.success("Added to cart!");
//         dispatch(addToCart(book));
//     }

//     const fetchbook = async function () {
        

//             let res = await fetch("/api/fetchbook", {
//                 method: "POST",
//             body: JSON.stringify({isbn: isbn })
//         })
//         let data = await res.json().then((re) => {

//                 setBook(re[0])
//             setloaded(true)
//         })
        
//     }

//     useEffect(() => {
//         fetchbook();

//     }, [isbn])


//     return (
//         <Suspense>

//             <>


//                 {loaded ? <> <div className='flex pt-10 px-20 h-fit w-full  text-white bg-[#2a2a2a]'>
//                     <div className='w-[40%]  flex justify-center items-center relative '>


//                         <img className=' mx-auto 2xl:h-[350px] xl:h-[330px] lg:h-[300px] md:h-[250px] ' src={`/books/${book.genre}/${book.imgName}.png`} alt="" />

//                         {/* {
//                         book.tag === "Best Seller" ? <div className='w-15 absolute top-[-15px] right-[-15px]'><img src="/icons/best-seller.png" alt="" /></div> : <></>
//                         } */}
//                     </div>
//                     <div className='p-8 lg:pt-10  xl:p-12 flex flex-col h-full w-[60%] md:gap-4 lg:gap-6 '>
//                         <div className=''>
//                             <h3 className=' md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold font-[Fredoka]'>{book.title}</h3>
//                             <p className='font-semibold md:text:xs lg:text-sm  xl:text-base 2xl:text-lg text-amber-400'>Author: {book.author}</p>
//                             <p className='font-semibold md:text-xs lg:text-xs xl:text-sm 2xl:text-base'>★ {book.rating}</p>
//                         </div>
//                         <div className='flex  gap-5  items-center'>
//                             <p className=' md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold'>₹{book.priceAfterDiscount}</p>
//                             <p className=' md:text-lg lg:text-xl xl:text-xl font-semibold'><strike>₹{book.mrp}</strike></p>
//                         </div>
//                         <div className=''>
//                             <p className='md:text-xs lg:text-sm  xl:text-base 2xl:text-lg'>Description: {book.description}</p>
//                         </div>
//                         <div className='flex  gap-3 text-black font-bold '>
//                             <button onClick={handleAdd}

//                                 className='xl:px-10 xl:py-3 lg:px-7 lg:py-2  md:px-6 md:py-2 bg-amber-200 md:text-sm lg:text-base text-lg hover:cursor-pointer hover:bg-yellow-200'>Add to Cart</button>
//                             <button className='xl:px-10 xl:py-3 lg:px-7 lg:py-2 md:px-6 md:py-2 bg-amber-400 md:text-sm lg:text-base text-lg hover:cursor-pointer'>Buy Now</button>

//                         </div>

//                     </div>
//                 </div>

//                     <div className='w-full h-fit py-4 md:px-20 lg:px-30 px-50 bg-[#212121] text-white'>
//                         <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold my-3'>Product Details</h3>
//                         <div className='flex gap-10  px-10 my-6 md:text-base xl:text-lg  2xl:text-lg'>
//                             <div className='font-semibold'>
//                                 <ul className='font-bold'>
//                                     <li>Title: </li>
//                                     <li>Author: </li>
//                                     <li>Genre: </li>
//                                     <li>ISBN: </li>
//                                     <li>Publisher: </li>
//                                     <li>Type: </li>
//                                     <li>Page Count: </li>
//                                     <li>Dimension: </li>
//                                     <li>Weight: </li>
//                                     <li>Release Year: </li>
//                                 </ul>
//                             </div>
//                             <div>
//                                 <ul>
//                                     <li>{book.title} </li>
//                                     <li>{book.author} </li>
//                                     <li>{book.genre} </li>
//                                     <li>{book.isbn} </li>
//                                     <li>{book.publisher} </li>
//                                     <li>{book.type} </li>
//                                     <li>{book.pageCount} </li>
//                                     <li>{book.dimensions} </li>
//                                     <li>{book.weight} </li>
//                                     <li>{book.releaseYear || book["release_date"]} </li>

//                                 </ul>
//                             </div>
//                         </div>
//                     </div>

//                     <SimilarBooks props={[book.genre, book.title]} />

//                 </> : <></>
//                 }




//             </>
//         </Suspense>
//     )
// }


// export default Page
