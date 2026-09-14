import "./Product1.css";
import assistant from '../../../../assets/product-images/g-assistant.png'; 
import file from '../../../../assets/product-images/Google-file.png';
import hotspot from '../../../../assets/product-images/g-hotspot.png';
import calendar from '../../../../assets/product-images/g-calendar.webp';
import log from '../../../../assets/product-images/g-log.webp';
import find from '../../../../assets/product-images/find-my-device.png';
import authenticator from '../../../../assets/product-images/authenticator.png';
import fit from '../../../../assets/product-images/fit-bit.png';
import airplane from '../../../../assets/product-images/airplane-mode.png';
import youtube from '../../../../assets/product-images/Youtubemusic.png';
import youtubes from '../../../../assets/product-images/Youtube-tv.png';

const Product = () => {
    return (
        <div className="icons-wrapper">
            <div className="floating-icons">
                
                <img src={assistant} alt="g-assistant" />
                <img src={file} alt="Google-file" /> 
                <img src={hotspot} alt="g-hotspot" /> 
                <img src={calendar} alt="g-calendar" />
                <img src={calendar} alt="g-calendar" />
                <img src={log} alt="g-log" /> 
                <img src={hotspot} alt="g-hotspot" /> 
                <img src={find} alt="g-board" /> 
                <img src={authenticator} alt="g-board" /> 
                <img src={fit} alt="g-board" /> 
                <img src={airplane} alt="g-board" /> 
                <img src={youtube} alt="g-board" /> 
                <img src={youtubes} alt="g-board" /> 

            </div>


        </div>
    );
};

export default Product;
