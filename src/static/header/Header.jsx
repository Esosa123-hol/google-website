import "./Header.css"
import { NavLink } from "react-router-dom";

let isAboutActive = false;
let isProductActive = false;
let isCompanyInfoActive = false;
let isNewsActive = false;

function activeAbout() {
    isAboutActive = true;
}

function activeProduct() {
    isProductActive = true;
}

const Header = () => {
    return(
        <div className="headerContainer">
            <section>
                <img className="logo" src="./src/assets/aboutimage/google-logo-about.svg" alt="logo" />
            </section>
            <div className="navigation">
                <NavLink className="page-link" to="/" onClick="activeAboute()" style={{borderBottom: isAboutActive ? 'solid rgb(244, 74, 7) 3px' : 'solid rgb(13, 13, 216) 3px'}} >About</NavLink>
                {/* <Link className="page-link" to="/" onClick="activeAboute">About</Link> */}
                <NavLink className="page-link" to="/products">Products</NavLink>
                <NavLink className="page-link" to="/company-info">Company Info</NavLink>
                <NavLink className="page-link" to="/news">News</NavLink>
            </div>


        </div>
    );
};
export default Header;
