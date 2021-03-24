import React,{useState,useEffect} from 'react';
import './homepage.style.css';
import TopRated from "../../components/compounds/Toprated";
import NowPlaying from "../../components/compounds/Nowplaying";
import Popular from "../../components/compounds/Popular";
import UpcomingMovies from "../../components/compounds/Upcomingmovies";



const HomePage = () => {

    return (
        <div className={'homepage'}>

            <div className={'homepage_hp-c container'}>
                <NowPlaying/>
                <TopRated/>
                <Popular/>
                <UpcomingMovies/>
            </div>


        </div>
    );
};

export default HomePage;