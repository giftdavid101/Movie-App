import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import './nowplaying.style.css';
import Card from "../../elements/Card";

const NowPlaying = () => {
    const [nowPlaying, setNowPlaying] = useState([])
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
    },[])



    return (
        <div className={'latest-movie'}>
             <div>
                 {
                     nowPlaying.map((el) => (
                         <Card key={el.id}>
                             <div className={'card_emage-div'}>
                                 <img className={'emage'} src={`https://image.tmdb.org/t/p/w200/${el.backdrop_path}`} alt={el.title}/>
                             </div>
                             <h5>{el.title}</h5>
                         </Card>
                     ))
                 }
             </div>
        </div>
    );
};

export default NowPlaying;