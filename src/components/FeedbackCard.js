// Specials Component
import React from 'react';
import './FeedbackCard.css';


function FeedbackCard(props) {
    const { name, rating, comment, cutomerImage } = props.item;

    return (
        <div className="feedback-card">
            <p>Rating: {rating}  / 5 </p>
            <div className="feedback-card-customer">
                <img src={cutomerImage} alt={name} />
                <p>{name}</p>
            </div>
            <p>{comment}</p>
        </div>
    )
}

export default FeedbackCard;
