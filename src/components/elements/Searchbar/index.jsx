import React from 'react';
import './searchbar.style.css';


const SearchBar = ({query}) => {
    const onChange = e => {
        e.preventDefault();
    }
    return (
        <div className={'search-bar'}>
            <input value={query} onChange={onChange} type={'text'} placeholder={'Search for movies'} className={'inp'}/>
        </div>
    );
};

export default SearchBar;