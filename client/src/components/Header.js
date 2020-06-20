import React from 'react';
import s from "./Header.module.css";
import google from "../assets/google-logo-png-hd-11.png";

const Header = (props) => {
    return <header className={s.main}>
        <div>
            <i className="fa fa-search"></i>
            <h5>EN</h5>
        </div>

        <img src={google} alt="..."></img>    

        <div>
            <h5>Eddie</h5>
            <i className="fa fa-user"></i>
        </div>
    </header>
}

export default Header;
