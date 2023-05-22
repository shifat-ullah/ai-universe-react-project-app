/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const Modal = (props) => {
  const {image_link,tool_name,description,integrations,features,input_output_examples}=props.singleData;
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
  <div className="card lg:card-side bg-base-100 ">
  <div className="card-body">
    <p className='text-2xl'>{description ? description : "not found"}</p>

      <div className='flex justify-between'>
        <div>
            <h1 className='text-2xl'>Features</h1>
            {
              Object.values(features || {}).map((value) => (
              <p>. {value.feature_name ? value.feature_name: "not found"}</p>))
            }
        </div>
        <div>
          <h1 className='text-2xl'>Integrations</h1>
          {
           integrations && integrations.map((intre) => (
              <p>{intre ? intre : "not found"}</p>
            ))
          }
        </div>
      </div>

    <div className="card-actions justify-end">
    </div>
  </div>
  
  <figure><img src={image_link && image_link[0] } alt=""/></figure>
  
</div>
<label htmlFor="my-modal-5" className="btn ml-[90%] mt-2">Cancle!</label>
  </div>
</div>
        </div>
    );
};

export default Modal;