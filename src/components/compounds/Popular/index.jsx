import React, {useState,useEffect} from 'react';
import  Axios from 'axios'
// import Card from "../../elements/Card";
import './popular.style.css'
import PopularCard from "../../elements/Popularcard";

const Popular = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const mainUrl = process.env.REACT_APP_API_BASE_LINK
 /**
 * @param {string} link -takes the page link
 */


    const requestPopularMovies = (link = `https://api.themoviedb.org/3/movie/popular?api_key=${mainUrl}&language=en-US&page=1`) => {
       Axios.get(link).then((response) => {
           const {data, status} = response
           if (status === 200){
               setPopularMovies(data.results)
           }
       }).catch((err) =>{
           console.log(err)
       })
    }
    useEffect(() =>{
        requestPopularMovies()
        // eslint-disable-next-line
    },[])


    return (
        <div className={'popular'}>
          <h2 className={'tiny-elements-padding'}> Popular Movies</h2>
            <div className={'popular_p-con grid-style'}>
                {
                    popularMovies.map((el) => (
                        <PopularCard
                            key={el.id}
                            movie={el}
                            emage={el.backdrop_path}
                        />
                    )).slice(15)
                }
            </div>
        </div>
    );
};

export default Popular;