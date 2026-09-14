import "./Product2.css";
import producthero from '../../../../assets/product-images/producthero.webp';
import support from '../../../../assets/product-images/support.png';
import store from '../../../../assets/product-images/store.webp';
import account from '../../../../assets/product-images/account.png';
import accessibility from '../../../../assets/product-images/accessibility.png';
import logo from '../../../../assets/product-images/Google.webp';
import maths from '../../../../assets/product-images/maths.png';
import curve from '../../../../assets/product-images/curve.webp';
import gemini from '../../../../assets/product-images/gemini.png';
import abc from '../../../../assets/product-images/gemini-live.mp4'

const Product2 = () => {
  return (
    <div>
        <div className="products-page">

            <h1>
                Helpful products, built with you
                <br />
                in mind
            </h1>

            <div className="product-links">
                <a href="#">Search in new ways</a>
                <a href="#">Chat with Gemini</a>
                <a href="#">Try AI tools</a>
                <a href="#">Explore more products</a>
            </div>
            <div className="product-image">
                <img src={producthero} alt="Google phones" />
            </div>
        </div>
        <div className="support-section">

  <div className="support-card">
    <div>
      <h2>Product support</h2>
      <span>↗</span>
    </div>
    <img src={support} alt="Product support" />
  </div>

  <div className="support-card">
    <div>
      <h2>Google Store</h2>
      <span>↗</span>
    </div>
    <img src={store} alt="Google Store" />
  </div>

  <div className="support-card">
    <div>
      <h2>Google Account</h2>
      <span>↗</span>
    </div>
    <img src={account} alt="Google Account" />
  </div>

  <div className="support-card">
    <div>
      <h2>Accessibility support</h2>
      <span>↗</span>
    </div>
    <img src={accessibility} alt="Accessibility support" />
  </div>

</div>
<div className="search-section">

  <div className="google-logo">
    <img src={logo} alt="google" />
  </div>

  <h1>Search in new ways</h1>

  <button>Download the Google app</button>

</div>

<div className="grid">
  <div className="column">
    <div className="card circle">
      <img src={curve} alt="" />
        <div className="circleText" >
            <h4>CIRCLE TO SEARCH</h4>
            <p>Circle, highlight or tap to search anything on your Android device.</p>
        </div>
     
        
    </div>

    <div className="card ai">
      AI Mode
    </div>
  </div>

  <div className="column">
    <div className="card info">
      <div className="cText">
      <h4>HOW SEARCH WORKS</h4>
      <p>Get the details on how Search works - from the approach we take, to the technology behind it.</p>
      </div>
    </div>

    <div className="card lens">
      Lens
    </div>
  </div>
</div>
<div className="googs-section">

  <div className="google-logo">
    <img src={gemini} alt="gemini" />
  </div>

  <h1>Chat With Gemini, Your Personal AI assistant</h1>

  <button>Try it now</button>

</div>

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

export default Product2;
