import React from "react";
import "./DarkMode.css";
import sunIcon from "./Sun.svg";
import moonIcon from "./Moon.svg";

const DarkMode = () => {
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <img src={sunIcon} alt="Sun" className="sun" />
                <img src={moonIcon} alt="Moon" className="moon" />
            </label>
        </div>
    );
};

export default DarkMode;
