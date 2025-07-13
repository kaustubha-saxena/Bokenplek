import { Suspense } from 'react';
import ClientBookPage from './ClientBookPage';

const Page = () => {
  return (
    <Suspense fallback={<div className='text-white p-10'>Loading product...</div>}>
      <ClientBookPage />
    </Suspense>
  );
};

export default Page;
