import React from 'react'
import './style.css';

const features = [
    {
        icon: 'icon-1.svg',
        title: 'Best prices & offers',
        subtitle: 'Orders $50 or more',
    },
    {
        icon: 'icon-2.svg',
        title: 'Free delivery',
        subtitle: '24/7 amazing services',
    },
    {
        icon: 'icon-3.svg',
        title: 'Great daily deal',
        subtitle: 'When you sign up',
    },
    {
        icon: 'icon-4.svg',
        title: 'Wide assortment',
        subtitle: 'Mega Discounts',
    },
    {
        icon: 'icon-5.svg',
        title: 'Easy returns',
        subtitle: 'Within 30 days',
    },
];

export default function ServiceProvide() {
    return (
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 bg-gray-50 my-4">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="d-flex items-start gap-1 bg-white rounded-lg shadow-sm custom-cart-container rounded-2"
                >
                    <img
                        src={`/services-image/${feature.icon}`}
                        alt={feature.title}
                        className="w-10 h-10"
                    />
                    <div className='text-container w-100'>
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                        <p className="text-sm text-gray-500">{feature.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
