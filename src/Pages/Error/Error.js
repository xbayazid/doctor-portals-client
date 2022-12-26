import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../assets/images/404Error.png';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const Error = () => {
    return (
        <div className='mb-20'>
            <div>
                <img className='w-1/2 mx-auto' src={errorImg} alt="" />
            </div>
            <div className='text-center'>
                <Link to='/'>
                   <PrimaryButton>Back to Home</PrimaryButton>
                </Link>
            </div>
        </div>
    );
};

export default Error;