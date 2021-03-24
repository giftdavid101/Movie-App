import React,{useState} from 'react';
import './searchbar.style.css';
import Axios from 'axios';

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