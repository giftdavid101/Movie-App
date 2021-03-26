import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import './upcoming.style.css'
import Card from "../../elements/Card";

const UpcomingMovies = () => {
    const [upcoming, setUpcoming] = useState([]);
    const mainUrl = process.env.REACT_APP_API_BASE_LINK

    /**
    * @param {string} link-takes the page link
    */

    const requestUpcomingMovies = (link=`https://api.themoviedb.org/3/movie/upcoming?api_key=${mainUrl}&language=en-US&page=1`) => {
       Axios.get(link).then((response) => {
           const {data, status} = response
           if(status === 200){
               setUpcoming(data.results)
           }
       }).catch((err) => {
           console.log(err)
       })
    }
    useEffect(() => {
        requestUpcomingMovies()
        // eslint-disable-next-line
    },[])

    return (
        <div className={'upcoming-movies'}>
            <h2 className={'tiny-elements-padding'}>Upcoming Movies</h2>
            <div className={'grid-style'}>
                {
                    upcoming.map((el) => (
                        <Card key={el.id}>
                            <div className={'card_emage-div'}>
                                <img className={'emage'} src={`https://image.tmdb.org/t/p/w200/${el.poster_path}`} alt={el.title}/>
                            </div>
                            <h6>{el.title}</h6>
                        </Card>
                    ))

                }
            </div>

        </div>
    );
};

export default UpcomingMovies;