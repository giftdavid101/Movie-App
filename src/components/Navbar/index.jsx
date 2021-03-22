import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.style.css'

const NavBar = () => {
    return (
        <div className={'navbar'}>
            <div className={'navbar_nb'}>

                <div className={'navbar_nb_nav-lnks'}>
                    <Link to={'/'}>Movies</Link>
                    <Link to={'/watched'}>Watched</Link>
                    <Link to={'/watchlist'}>WatchList</Link>
                </div>

            </div>
        </div>
    );
};

export default NavBar;