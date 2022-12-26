import React from 'react';
import clockLogo from '../../../assets/icons/clock.svg';
import locationLogo from '../../../assets/icons/marker.svg';
import phoneLogo from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard/InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open from 9.00 AM to 5.00 PM everyday',
            icon: clockLogo,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            icon: locationLogo,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+000 123 456789',
            icon: phoneLogo,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card =><InfoCard
                key={card.id}
                card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;