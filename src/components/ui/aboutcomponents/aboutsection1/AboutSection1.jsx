import "./AboutSection1.css";
import abc from '../../../../assets/aboutimage/gemini.mp4';


const AboutSection1 = () => {
    return(
        <div>
            <section className="alphagenome">
                <div className="alphagenome-content">
                    <div className="alphagenome-text">
                        <h2>
                            Gemini app is now available for Windows
                        </h2>

                        <p>
                            Get help from AI with a simple keyboard shortcut, directly from your desktop
                        </p>

                        <button>Check it out</button>
                    </div>

                    <div className="alphagenome-image">
                    <video width="500px" height="200px" controls alt="AlphaGenome visualization"> 
                        <source src={abc} />
                    </video>
                    </div>

                </div>
            </section>
        </div>
    );
};
export default AboutSection1;