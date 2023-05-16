/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Button = (props) => {
   
    return (
        <div className='text-center mt-5'>
            <button className="btn btn-error ">{props.children}</button>
        </div>
    );
};

export default Button;