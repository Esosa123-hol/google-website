import "./Product3.css";
import android from '../../../../assets/product-images/android-2.png';
import phone from '../../../../assets/product-images/phone.webp';

const Product3 = () => {
    return (
        <div>
            <h1 className="heder">Get more done with Android and Pixel </h1>
            <div className="apd">
                <div className="android">
                    <img src={android} alt="" />
                    <h4>All things Android</h4>
                    <p>check out a whole world of devices that works better together, plus AI features to help throughout your day.</p>
                    <a href="#">see what's new</a>

                </div>
                <div className="pixel">
                    <img src={phone} alt="" />
                    <h4>Our Pixel portfolio</h4>
                    <p>See the latest Pixel lineup - from phones and watches, to earpods and tablets.</p>
                    <a href="#">shop now</a>

                </div>

            </div>
        </div>
    );
};

export default Product3;