import React,{useContext,useState,useEffect} from 'react';
import {GlobalContext} from "../../../context/globalstate";
import {Route} from 'react-router-dom';
import Axios from 'axios';
import './nowplaying.style.css';
// import NowPlayingCard from "../../elements/Card";
import TopRatedSingle from "../TopRatedSingleDetail";
import NowPlayingCard from "../../elements/Nowplayingcard";


const NowPlaying = ({match}) => {
    const [nowPlaying, setNowPlaying] = useState([])
  // const {nowPlaying} = useContext(GlobalContext)
    const mainUrl = process.env.REACT_APP_API_BASE_LINK

    /**
     * @param {string} link -takes the page link
     */

    const requestLatestMovie = (link = `https://api.themoviedb.org/3/movie/now_playing?api_key=${mainUrl}&language=en-US` ) => {
      Axios.get(link).then((response) =>{
        const {data,status} = response
          console.log(response)

          if (status === 200){
           setNowPlaying(data.results)
          }
      }).catch((err) =>{
          console.log(err)
      })
    }
    useEffect(() =>{
        requestLatestMovie()
        // eslint-disable-next-line
    },[])


    console.log(match)
    return (
        <div className={'now-playing'}>
            <h2 className={'tiny-elements-padding'}>Now Playing</h2>
             <div className={'now-playing_np-con grid-style'}>
                 {
                     nowPlaying.map((el) => (
                         <NowPlayingCard movie={el} key={el.id}/>
                     )).slice(15)
                 }
             </div>
        </div>
    );
};

export default NowPlaying;