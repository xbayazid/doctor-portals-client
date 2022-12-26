import React from 'react';
import appointment from '../../../../assets/images/appointment.png'
import PrimaryButton from '../../../../components/PrimaryButton/PrimaryButton';

const ContactForm = () => {
    return (
        <section className='p-20' style={{background: `url(${appointment})`}}>
            <div>
            <div className='text-center'>
                    <h4 className="text-xl text-primary font-bold">Contact Us</h4>
                    <h2 className="lg:text-4xl text-2xl text-white">Stay connected with us</h2>
                </div>
                <div className='text-center mt-10'>
                <div className='my-4'>
                <input type="text" placeholder="Email Address" className="input w-full max-w-xs" />
                </div>
                <div>
                <input type="text" placeholder="Subject" className="input w-full max-w-xs" />
                </div>
                <div>
                <textarea className="my-4 textarea w-full max-w-xs" placeholder="Your message"></textarea>
                </div>
                <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;