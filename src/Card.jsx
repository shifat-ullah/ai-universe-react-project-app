/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SingleApi from './SingleApi';
import Button from './Button';


const Card = () => {
    const [data, setData]=useState([])
    const [showAll, setshowAll]=useState(false)

    const SeeMoreButton =()=>{
        setshowAll(true)
    }
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
         .then(res => res.json())
         .then(data => setData(data.data.tools
            ))

       },
       
       []);

    return (
        <div className='penentCard'>
            <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-3 grid-cols-1'>
            {
                data.slice(0, showAll ? 12 : 6).map(singleApi => {
                                      
                    return <SingleApi singleApi={singleApi}></SingleApi>
                })
            }
            
        </div>
        <div onClick={SeeMoreButton} className='text-center'>
            <Button>See More</Button>
            </div>
        </div>
    );
};

export default Card;