import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
const Header = () => {
    const [currentlyLoggedIn,setcurrentlyLoggedIn] = useState(false);
    return (
        <div className="header">
            <div className="logocontainer">
                <img src={LOGO_URL} alt="logo" width="50" className='logo' />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <button className="login" onClick={() => {
                        let updatedLoginstatus = (currentlyLoggedIn)?false:true;
                        setcurrentlyLoggedIn(updatedLoginstatus);
                    }}>
                        {currentlyLoggedIn === true?'Logout':'Login'}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;