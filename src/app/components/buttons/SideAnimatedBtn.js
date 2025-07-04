import React from 'react'

const SideAnimatedBtn = ({ content, classnames }) => {
    return (
        <button className={`relative px-8 py-4   hover:cursor-pointer before:content-[""] before:h-[100px] before:w-[100px]  before:top-[-25%] ${classnames} before:left-[-50%] before:absolute before:rounded-full hover:before:scale-600 hover:before:transition-transform before:duration-400 before:transition-timing-function: var(--ease-in-out);  before:opacity-25`}>
            <div className='relative  z-99'>{content}</div></button>

    )
}

export default SideAnimatedBtn
