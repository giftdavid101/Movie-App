import React,{useState,useEffect} from 'react';
import './homepage.style.css';
import TopRated from "../../components/compounds/Toprated";
import NowPlaying from "../../components/compounds/Nowplaying";



const HomePage = () => {

    return (
        <div className={'homepage'}>

            <div className={'homepage_hp-c container'}>
                <NowPlaying/>
              <TopRated/>
            </div>


        </div>
    );
};

export default HomePage;