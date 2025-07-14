"use client"
import React, { useEffect, useState } from 'react'

const Filter = () => {
  


 const fetchbook = async () => {
    let res = await fetch("/api/fetchbook", {
      method: "POST",
      body: JSON.stringify({
        tag: "Best Seller"
      })
    })
    let data = await res.json().then((re) => {

      setBook(re)
      setloaded(true)
    })

  }
    
    // const handleClick = (e) => {
    //     setgenre((genre) =>
    //         genre.map((item) =>
    //             item.genre === e.target.name
    //                 ? { ...item, checked: !item.checked }
    //                 : item
    //         )
    //     );

    // }


    return (
        <>
            <div className='w-[50vw] h-[400px] bg-amber-500 absolute top-0 right-0 z:99 p-5 flex  gap-4' >
                <div >Genre
                    <div className='h-[100%] overflow-scroll'>
                        <ul>

                            {/* {
                                Genre.map(item => {
                                    return (
                                        <>

                                            <li>
                                                <input onClick={(e) => { handleClick(e) }} type="checkbox" name={item.genre} id={item.genre} checked={item.checked} />
                                                <label htmlFor={item.genre}>{item.genre.toUpperCase()}</label>
                                            </li>
                                        </>
                                    )
                                })
                            } */}

                        </ul>
                    </div>
                </div>
                {/* <div >Rating
                    <div>
                        <ul>
                            <li>
                                <input type="checkbox" name="adventure" id="" />
                                <label htmlFor="adventure">4.5 & above</label>
                            </li>
                            <li>
                                <input type="checkbox" name="biography" id="" />
                                <label htmlFor="biography">4.0-4.5</label>
                            </li>
                            <li>
                                <input type="checkbox" name="adventure" id="" />
                                <label htmlFor="adventure">Below 4.0</label>
                            </li>


                        </ul>
                    </div>
                </div>
                <div >Price
                    <div>
                        <ul>
                            <li>
                                <input type="checkbox" name="adventure" id="" />
                                <label htmlFor="adventure">Below 300</label>
                            </li>
                            <li>
                                <input type="checkbox" name="biography" id="" />
                                <label htmlFor="biography">300-700</label>
                            </li>
                            <li>
                                <input type="checkbox" name="adventure" id="" />
                                <label htmlFor="adventure">500-700</label>
                            </li>
                            <li>
                                <input type="checkbox" name="adventure" id="" />
                                <label htmlFor="adventure">Above 700</label>
                            </li>


                        </ul>
                    </div>
                </div>
                <div >Type
                    <div>
                        <ul>
                            <li>
                                <input type="checkbox" name="adventure" id="adventure" />
                                <label htmlFor="adventure">Fiction</label>
                            </li>
                            <li>
                                <input type="checkbox" name="adventure" id="" />
                                <label htmlFor="adventure">Non Fiction</label>
                            </li>



                        </ul>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Filter
