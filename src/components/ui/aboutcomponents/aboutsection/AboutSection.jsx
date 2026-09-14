import "./AboutSection.css"
import girl from "../../../../assets/aboutimage/girl.png"
import dark from "../../../../assets/aboutimage/dark.png"
import research from "../../../../assets/aboutimage/research.png"
import icon from "../../../../assets/aboutimage/icon.png"
const AboutSection = () => {
    return (
        <div className="about-section">


             <div className="cards">

                 {/* Card 1 */}
                 <div className="card">
                     <img src={girl} alt="girl" />

                     <div className="card-content">
                <p>
                    Explore our products and features across Search,
                    Google Workspace, and more
                </p>
                {/* <img src={icon} alt="icon"  className="card-icon"/> */}
                </div>
             </div>

                    {/* Card 2 */}
                    <div className="card">
                    <img src={dark} alt="dark" />

                    <div className="card-content">
                        <p>
                        Learn all about our leading AI models — and
                        discover their capabilities
                        </p>
                    </div>
                        </div>

                    {/* Card 3 */}
                    <div className="card">
                <img src={research} alt="research" />

                <div className="card-content">
                    <p>
                    See how we're tackling some of the most challenging
                    problems in computer science
                    </p>
                    </div>
                    </div>

                    </div>

            

             </div>
            );
        };
        export default AboutSection;
