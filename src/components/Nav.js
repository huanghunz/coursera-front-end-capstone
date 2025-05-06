import './Nav.css';

const defaultLinks = [
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

function Nav(props) {

    const {customLinksData} = props;
    const navLinks = customLinksData ? customLinksData : defaultLinks;
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
            <img className="nav-logo" src="/icons_assets/logo.svg" alt="Logo" />
            {
                navLinks.map((s) => {
                    if (s.elementId !== undefined) {
                        return (
                            <a  className="nav-link"
                                href={s.elementId} key={s.text} onClick={handleClick(s.elementId)}>{s.text}</a>
                        )
                    } else if (s.externalLink !== undefined) {
                        return (
                            <a  className="nav-link"
                                href={s.externalLink} key={s.text} >{s.text}</a>
                        )
                    }
                })
            }
        </nav>
    )
}

export default Nav;
