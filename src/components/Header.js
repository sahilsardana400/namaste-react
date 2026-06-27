import { LOGO_URL } from "../utils/constants";
const Header = () => {
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
                </ul>
            </div>
        </div>
    );
};

export default Header;