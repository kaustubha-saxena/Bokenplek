'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Bookcard from '../components/cards/bookcard';
import PageHeading from '../components/Heros/Header';
import Link from 'next/link';

const ClientCollectionPage = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  const [Book, setBook] = useState([]);
  const [Header, setHeader] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchBook = async () => {
    const res1 = await fetch('/api/fetchbook', {
      method: 'POST',
      body: JSON.stringify({ genre }),
    });
    const bookData = await res1.json();
    setBook(bookData);

    const res2 = await fetch('/api/fetchheader', {
      method: 'POST',
      body: JSON.stringify({ genre }),
    });
    const headerData = await res2.json();
    setHeader(headerData[0]);

    setLoaded(true);
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <PageHeading params={Header} />
      <div className='w-full'>
        {loaded ? (
          <>
            <div className='text-white pt-8 px-4'>
              <Link className='hover:underline' href={"/"}>Home </Link> &gt;
              <Link className='hover:underline' href={"/genre"}>Genre </Link> &gt;
              <Link className='hover:underline' href={`/collection?genre=${genre}`}>{genre}</Link>
            </div>
            <div className='sm:px-5 px-3 flex justify-center items-center gap-y-6 gap-x-3 sm:gap-5  md:gap-5 lg:gap-10 xl:gap-10   w-full mt-8 flex-wrap lg:flex-1/4'>
              {Book.map(book => (
                <Bookcard key={book._id} props={book} />
              ))}
            </div>
          </>
        ) : (
          <div className='text-white p-8'>Loading...</div>
        )}
      </div>
    </>
  );
};

export default ClientCollectionPage;
