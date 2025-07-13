import React from 'react'
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart, removeItem } from '@/app/Redux/cartslice';
const CartCard = ({ params }) => {
    
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addToCart(params));
        toast.success("Added to cart!");
    }
    const handleRemove = () => {
        dispatch(removeFromCart(params));
        toast.success ("Removed from cart!");
    }
    const removeAll = () => {
        dispatch(removeItem(params));
        toast.success ("Removed from cart!");
    }
    return (
        <>
            <div className='flex my-2 h-fit  after:content-[""] after:w-[90%] after:h-[2px] after:bg-[#787878] relative after:absolute after:bottom-[-10px] after:left-[10%] '>

                <img className='w-15' src={`/books/${params.genre}/${params.imgName}.png`} alt="" />
                <div className='  flex  justify-between items-center w-[100%] px-3 relative  '>
                    <div className=' w-[100%]'>
                        <p className='truncate lg:text-sm xl:text-lg  font-semibold font-[Fredoka]'>{params.title}</p>
                        <p className='lg:text-xs xl:text-sm text-gray-300'>{params.author}</p>
                        <p className=' lg:text-sm xl:text-lg font-semibold'>₹ {params.priceAfterDiscount}</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button onClick={handleRemove} className='px-3 border-2 border-[#787878] hover:bg-[#9e9e9e]'>-</button>
                        <p className='px-3 border-2 border-[#787878]'>{params.quantity}</p>
                        <button onClick={handleAdd} className='px-3 border-2 border-[#787878] hover:bg-[#9e9e9e]'>+</button>
                    </div>
                    <div className='absolute top-0 right-1.5'>
                        <button onClick={removeAll} className=''>
                        <img  className='w-3' src="./icons/close.png" alt="" />

                        </button>
                                            </div>
                </div>
            </div>
        </>
    )
}

export default CartCard
