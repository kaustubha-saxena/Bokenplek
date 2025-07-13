
'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartslice';
import SimilarBooks from '../components/SimilarBooks';
import { toast } from 'react-toastify';

const ClientBookPage = () => {
  const searchParams = useSearchParams();
  const isbn = searchParams.get('isbn');

  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [book, setBook] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchBook = async () => {
    const res = await fetch('/api/fetchbook', {
      method: 'POST',
      body: JSON.stringify({ isbn }),
    });
    const data = await res.json();
    setBook(data[0]);
    setLoaded(true);
  };

  const handleAdd = () => {
    toast.success('Added to cart!');
    dispatch(addToCart(book));
  };

  useEffect(() => {
    fetchBook();
  }, [isbn]);

  if (!loaded) return null;

  return (
    <>
      <div className='flex pt-10 px-20 h-fit w-full text-white bg-[#2a2a2a]'>
        <div className='w-[40%] flex justify-center items-center relative'>
          <img
            className='mx-auto 2xl:h-[350px] xl:h-[330px] lg:h-[300px] md:h-[250px]'
            src={`/books/${book.genre}/${book.imgName}.png`}
            alt=''
          />
        </div>
        <div className='p-8 lg:pt-10 xl:p-12 flex flex-col h-full w-[60%] md:gap-4 lg:gap-6'>
          <h3 className='md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold font-[Fredoka]'>{book.title}</h3>
          <p className='font-semibold text-amber-400'>Author: {book.author}</p>
          <p className='font-semibold'>★ {book.rating}</p>
          <div className='flex gap-5 items-center'>
            <p className='text-2xl font-bold'>₹{book.priceAfterDiscount}</p>
            <p className='text-xl font-semibold'><strike>₹{book.mrp}</strike></p>
          </div>
          <p>Description: {book.description}</p>
          <div className='flex gap-3 text-black font-bold'>
            <button onClick={handleAdd} className='px-10 py-3 bg-amber-200 text-lg hover:bg-yellow-200'>Add to Cart</button>
            <button className='px-10 py-3 bg-amber-400 text-lg'>Buy Now</button>
          </div>
        </div>
      </div>

      <div className='w-full h-fit py-4 px-10 bg-[#212121] text-white'>
        <h3 className='text-2xl font-bold my-3'>Product Details</h3>
        <div className='flex gap-10 my-6 text-lg'>
          <div className='font-semibold'>
            <ul className='font-bold'>
              <li>Title:</li>
              <li>Author:</li>
              <li>Genre:</li>
              <li>ISBN:</li>
              <li>Publisher:</li>
              <li>Type:</li>
              <li>Page Count:</li>
              <li>Dimension:</li>
              <li>Weight:</li>
              <li>Release Year:</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>{book.title}</li>
              <li>{book.author}</li>
              <li>{book.genre}</li>
              <li>{book.isbn}</li>
              <li>{book.publisher}</li>
              <li>{book.type}</li>
              <li>{book.pageCount}</li>
              <li>{book.dimensions}</li>
              <li>{book.weight}</li>
              <li>{book.releaseYear || book["release_date"]}</li>
            </ul>
          </div>
        </div>
      </div>

      <SimilarBooks props={[book.genre, book.title]} />
    </>
  );
};

export default ClientBookPage;
