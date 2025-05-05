
// Nav Component

//import logo from '../icon_assets/logo.svg';

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
        <nav className="Nav">
            {/* TODO: CSS */}
            <img src="/icons_assets/logo.svg" alt="Logo" />
            {
                navLinks.map((s) => {
                    return (
                        <a  style={{marginRight: "10px"}}
                            href={s.elementId} key={s.elementId} onClick={handleClick(s.elementId)}>{s.text}</a>
                    )
                })
            }
        </nav>
    )
}

export default Nav;
