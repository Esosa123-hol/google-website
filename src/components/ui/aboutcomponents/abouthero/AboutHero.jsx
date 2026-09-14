import "./AboutHero.css"
import heroine from "../../../../assets/aboutimage/heroine.png";
const AboutHero = () => {
    return(
        <div className="aboutHeroContainer">
            <img src={heroine} alt="hero image" />
            

          <div className="hero-content">

          <h1>
            Introducing
            <br />
            Gemini 3.8 Flash
            <br />
            and 3.8 Flash Cyber
          </h1>

          <p>
            Our newest Gemini models deliver next-generation intelligence for agentic workflows and cybersecurity.
          </p>

          <button>
            Learn more
          </button>

         </div>

      

           
        </div>
        

    );
};
export default AboutHero;
