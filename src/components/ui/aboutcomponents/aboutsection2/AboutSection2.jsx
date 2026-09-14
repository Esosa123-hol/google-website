import "./AboutSection2.css"
import logo from "../../../../assets/aboutimage/logo.png"
const AboutSection2 = () => {
    return(
        <div>
            <section className="about-globe">

                <div className="google-logo">
                    <img src={logo} alt="Google logo" className="logo" />
                </div>

                 <h2>Google around the globe</h2>

                 <p>
                    Learn about Google's work and impact around the world.
                 </p>

                  <button>Explore</button>

             </section>

         </div>
    );
};
export default AboutSection2;