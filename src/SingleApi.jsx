/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import Button from './Button';

const SingleApi = (props) => {
    const {image,name,features,published_in} =props.singleApi;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
  <figure><img className='h-60 ' src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h1 className='text-2xl font-bold'>Features</h1>
    {/* <h2 className='text-2xl font-bold'>{}</h2> */}
    {/* <p>1. {features[0]}</p>
    <p>2. {features[1]}</p>
    <p>3. {features[2]}</p> */}

    
    {
        features.map((feature, index) => <p>
           {index + 1}. {feature}
        </p>)
    }
    <hr />
   
    <h2 className='text-2xl font-bold'>{name}</h2>

    <div className='flex justify-between'>
    <div className='flex'>
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

        </span>

        <p>{published_in}</p>
    </div>

    <div>
        
        <button className='btnn'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>
</button>
    </div>
    </div>
  </div>
  
</div>

        </div>
        
        
    );
};

export default SingleApi;