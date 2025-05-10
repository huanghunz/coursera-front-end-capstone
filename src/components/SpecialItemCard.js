// Specials Component
import './SpecialItemCard.css';

function SpecialItemCard(props) {
    const { image, title, price, description } = props.item;

    return (
        <div className="special-card" tabIndex={0} aria-label={`Special: ${title}`}>
            <img src={image} alt={title} />
            <div className="special-card-header">
                <span className="special-card-title">{title}</span>
                <span className="special-card-price">{price}</span>
            </div>
            <div className="special-card-desc">{description}</div>
            <button
                // onClick={onOrder}
                tabIndex={0}
                aria-label={`Order ${title}`}
            >
                Order Now
            </button>
        </div>
    )
}

export default SpecialItemCard;
