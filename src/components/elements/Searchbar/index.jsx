import React from 'react';
import './searchbar.style.css';

const SearchBar = () => {
    return (
        <div className={'search-bar'}>
            <input placeholder={'Search for movies'} className={'inp'}/>
        </div>
    );
};

export default SearchBar;