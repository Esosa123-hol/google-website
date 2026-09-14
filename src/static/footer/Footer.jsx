import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <footer className="google-footer">
                <div className="footer-container">

                    <div className="footer-column">
                        <h3>Resources</h3>

                        <a href="#blog">Blog</a>
                        <a href="#brand">Brand Resource Center</a>
                        <a href="#careers">Careers</a>
                        <a href="#contact">Contact us</a>
                        <a href="#help">Help Center</a>
                        <a href="#investor">Investor Relations</a>
                        <a href="#locations">Locations</a>
                        <a href="#press">Press resources</a>
                    </div>


                    {/* Column 2 */}
                    <div className="footer-column">
                        <h3>Outreach and initiatives</h3>

                        <a href="#accessibility">Accessibility</a>
                        <a href="#crisis">Crisis Response</a>
                        <a href="#google-org">Google.org</a>
                        <a href="#health">Google for Health</a>
                        <a href="#grow">Grow with Google</a>
                        <a href="#learning">Learning</a>
                        <a href="#policy">Public Policy</a>
                        <a href="#sustainability">Sustainability</a>
                    </div>
                    <div className="footer-column">
                        <h3>Research and technology</h3>

                        <a href="#google-ai">Google AI</a>
                        <a href="#cloud">Google Cloud</a>
                        <a href="#deepmind">Google DeepMind</a>
                        <a href="#developers">Google for Developers</a>
                        <a href="#labs">Google Labs</a>
                        <a href="#research">Google Research</a>
                    </div>


        

                        {/* Column 4 */}
                    <div className="footer-column">
                        <h3>More about us</h3>

                        <a href="#globe">Around the globe</a>
                        <a href="#human-rights">Human rights</a>
                        <a href="#safety">Safety Center</a>
                        <a href="#supplier">Supplier responsibility</a>
                        <a href="#transparency">Transparency Center</a>
                        <a href="#report">Transparency Report</a>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-bottom-left">
                            <a href="#google" className="footer-google">
                            Google
                            </a>
                            <a href="#privacy" className="footer-privacy">Privacy</a> 
                            <a href="#terms" className="footer-terms">Terms</a>
                        </div>
                        <div className="footer-bottom-right">
                            <a href="#help" className="footer-help"><span className="help-icon">?</span> Help</a>
                            <button className="languageselector">
                                <span>🌐English</span> 
                                <span className="dropdown-arrow">▼</span>
                            </button>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
    
};

export default Footer;