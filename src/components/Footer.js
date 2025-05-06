
// Nav Component

import Nav from './Nav';
import './Footer.css';

const footerImage = '../../icons_assets/restaurantfood.jpg';

const contactInfo = [
    {
        "text": "123 Main St, Anytown, USA",
        "elementId": "home-section"
    },
    {
        "text": "info@littlelemon.com",
        "elementId": "about-section"
    },
    {
        "text": "123-456-7890",
        "elementId": "menu-section"
    },
];

const socialMedia = [
    {
        "text": "Facebook",
        "externalLink": "https://www.facebook.com"
    },
    {
        "text": "Twitter",
        "externalLink": "https://www.twitter.com"
    },
    {
        "text": "Instagram",
        "externalLink": "https://www.instagram.com"
    },
];

function Footer() {
    return (
        <footer className="footer">
            <img className="footer-img" src={footerImage} alt="Little Lemon Restaurant" />
            <div className="footer-content">
                { /* 3 columns with list: nav, contact, social media */}
                <div className="footer-column">
                    <h3>Navigation</h3>
                    <Nav className="footer-nav"/>
                </div>
                <div className="footer-column">
                    <h3>Contact</h3>
                    <Nav className="footer-nav" customLinksData={contactInfo}/>
                </div>
                <div className="footer-column">
                    <h3>Social Media</h3>
                    <Nav className="footer-nav" customLinksData={socialMedia}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
