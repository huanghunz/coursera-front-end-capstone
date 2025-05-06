import './About.css';


const aboutImage1 = '../../icons_assets/Mario and Adrian A.jpg';
const aboutImage2 = '../../icons_assets/Mario and Adrian B.jpg';

const AboutSection = () => (
    <section className="about-section">
        <div className="about-left">
            <h1 className="about-title">Little Lemon</h1>
            <p className="about-subtitle">Chicago</p>
            <p className="about-desc">
                About About lasjfdljkdjl About About About About sldom asdl ladsd;lk About asdfjk About About About About About About About bbbb asldfkj About About sd;kf About About About About
            </p>

        </div>
        <div className="about-image-container">
            <img src={aboutImage1} alt="Little Lemon Restaurant" className="about-image image1" />
            <img src={aboutImage2} alt="Little Lemon Restaurant" className="about-image image2" />
        </div>
    </section>
)


function About() {
    return (
        <section>
            <AboutSection />
        </section>
    )
}

export default About;
