import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import peopleOne from '../../../assets/images/people1.png';
import peopleTwo from '../../../assets/images/people2.png';
import peopleThree from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const testimonialData = [
        {
            id: 1,
            name: 'Winson Herry',
            img: peopleOne,
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            id: 2,
            name: 'Winson Herry',
            img: peopleTwo,
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            id: 3,
            name: 'Winson Herry',
            img: peopleThree,
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        }
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className="text-4xl">What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    testimonialData.map(review => <Review 
                        key={review.id}
                        review = {review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;