

// home route

import React from 'react';
import './Home.css';
import SpecialItemCard from '../components/SpecialItemCard';
import FeedbackCard from '../components/FeedbackCard';

const mainImage = '../icons_assets/restaurant.jpg';


const specials = [
    {
        image: '../icons_assets/greek salad.jpg',
        title: 'Greek Salad',
        price: '$12.99',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
        image: '../icons_assets/bruchetta.svg',
        title: 'Bruschetta',
        price: '$5.99',
        description: 'Our Bruschetta is made from grilled bread that has been rubbed with garlic and seasoned with salt and olive oil.',
    },
    {
        image: '../icons_assets/lemon dessert.jpg',
        title: 'Lemon Dessert',
        price: '$5.00',
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    }
]

const feedback = [
    {
        name: 'Customer 1',
        rating: 4.5,
        comment: 'This is a comment',
        cutomerImage: '../icons_assets/restaurant chef B.jpg',
    },
    {
        name: 'Customer 2',
        rating: 1,
        comment: 'This is a comment',
        cutomerImage: '../icons_assets/restaurant chef B.jpg',
    },
    {
        name: 'Customer 3',
        rating: 5,
        comment: 'This is a comment',
        cutomerImage: '../icons_assets/restaurant chef B.jpg',
    },

]


const IntroSection = () => (
    <section className="intro-section">
        <div className="intro-left">
            <h1 className="intro-title">Little Lemon</h1>
            <p className="intro-subtitle">Chicago</p>
            <p className="intro-desc">
            Welcome to Little Lemon, where fresh flavors and cozy ambiance await you. Enjoy our chef’s specials and reserve your table today!
            </p>
            <button
            className="intro-reserve-btn"
            tabIndex={0}
            aria-label="Reserve a table"
            >
            Reserve a Table
            </button>
        </div>
        <img
            className="intro-image"
            src={mainImage}
            alt="Little Lemon Restaurant"
        />
    </section>
)

const SpecialsSection = () => (
    <section className='specials-section'>
        <h2>This week's specials!</h2>
        <div className="specials-cards-container">
            {
                specials.map((special) => (
                    <SpecialItemCard key={special.title} item={special} />
                ))
            }
        </div>
    </section>
)

const FeedbackSection = () => (
    <section className='feedback-section'>
        <h2>Customer Feedback</h2>
        <div className="feedback-cards-container">
            {feedback.map((feedback) => (
                <FeedbackCard key={feedback.name} item={feedback} />
            ))}
        </div>
    </section>
)

const Home = () => {
    return (
        <main>
            <IntroSection />
            <SpecialsSection />
            <FeedbackSection />
        </main>
    );
};

export default Home;


