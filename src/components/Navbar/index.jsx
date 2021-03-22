import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.style.css'
import Logo from "../../elements/Logo";

const NavBar = () => {
    return (
        <div className={'navbar'}>
            <div className={'navbar_nb'}>
                 <Logo/>
                <div className={'navbar_nb_nav-lnks'}>
                    <Link className={'n-l'} to={'/'}>Movies</Link>
                    <Link className={'n-l'} to={'/watched'}>Watched</Link>
                    <Link className={'n-l'} to={'/watchlist'}>WatchList</Link>
                </div>

            </div>
        </div>
    );
};

export default NavBar;