import React from 'react';
import './button.style.css'
import {RiHeartAddFill} from 'react-icons/all'

const Button = ({children, props}) => {
    return (
        <div className={'btn'}>
            {props}
            {children}
            <button style={{width:'300px', border:'20px', padding:'20px', background:'gold', fontSize:'25px'}} className={'btn_btn-tag'}> Add to Watchlist <RiHeartAddFill/></button>
        </div>
    );
};

export default Button;