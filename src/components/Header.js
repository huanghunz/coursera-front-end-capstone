//import Nav from './Nav';
import './Header.css';
const navLinks = [
    {
        "text": "Home",
        "elementId": "home-section"
    },
    {
        "text": "About",
        "elementId": "about-section"
    },
    {
        "text": "Menu",
        "elementId": "menu-section"
    },
    {
        "text": "Reservation",
        "elementId": "reservation-section"
    },
    {
        "text": "Order Online",
        "elementId": "order-online-section"
    },
    {
        "text": "Login",
        "elementId": "login-section"
    },
  ];

function Nav() {

    const handleClick = (id) => () => {
        /* Syntax note:
            const handleClick = (anchor) => {
            return () => {
                console.log(anchor);
            }
            }
            That returned function becomes the actual onClick handler.
        */
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };
    return (
        <nav className="nav">
            <div> {/* this div help sizing the logo in different screen sizes */}
                <img className="nav-logo" src="/icons_assets/logo.svg" alt="Logo" />
            </div>
            {
                navLinks.map((s) => {
                    return (
                        <a  className="nav-link"
                            href={s.elementId} key={s.elementId} onClick={handleClick(s.elementId)}>{s.text}</a>
                    )
                })
            }
        </nav>
    )
}

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <Nav />
            </div>
        </header>
    )
}

export default Header;
