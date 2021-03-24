import React, {useEffect, useState} from 'react';
import Axios from "axios";
import Card from "../../elements/Card";

const TopRated = () => {
    const [topRated,setTopRated] = useState([])
    const [pagination, setPagination] = useState(1)
    const mainUrl = process.env.REACT_APP_API_BASE_LINK
    /**
     * @param {string} link -takes the page link
     */


    const topRatedMovies =(link = `https://api.themoviedb.org/3/movie/top_rated?api_key=${mainUrl}&language=en-US&page=${pagination}`)=> {
        console.log(link)
        Axios.get(link).then((response) =>{
            const {data,status} = response
            console.log(response)
            if(status === 200){
                setTopRated(data.results)
            }
        }).catch((err) => {
            console.log(err)
        });
    }
    useEffect(() =>{
        topRatedMovies()
    },[])

    return (
        <div className={'top-rated'}>
           <h2>Top Rated</h2>
            <div className={'top-rated_tp-con grid-style'}>
                {
                    topRated.map((el) => (
                        <Card key={el.id}>
                            <div className={'card_emage-div'}>
                                <img className={'emage'} src={`https://image.tmdb.org/t/p/w200/${el.poster_path}`} alt={el.title}/>
                            </div>
                            <h5>{el.title}</h5>
                            <div>{el.vote_average}</div>
                        </Card>
                    )).slice(-5)
                }
            </div>
        </div>
    );
};

export default TopRated;