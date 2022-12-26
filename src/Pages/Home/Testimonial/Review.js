import React from 'react';

const Review = ({review}) => {
    const {name, location, reviews, img} = review;
    return (
        <div className="card shadow-xl">
  <div className="card-body">
    <p>{reviews}</p>
    <div className="flex items-center mt-6">
    <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img className='w-16' src={img} alt="" />
  </div>
  <div className='ml-4'>
    <h5 className="text-lg">{name}</h5>
    <p>{location}</p>
  </div>
</div>
    </div>
  </div>
</div>
    );
};

export default Review;