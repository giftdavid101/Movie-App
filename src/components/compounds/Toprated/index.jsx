import React, {useContext, useEffect, useState} from 'react';
import TopRatedCard from "../../elements/TopratedCard";
import mvRequest from "../../../utils/mvRequest";
import {GlobalContext} from "../../../context/globalstate";


const TopRated = () => {
    const [topRated,setTopRated] = useState([])

    // const mainUrl = process.env.REACT_APP_API_BASE_LINK



    /**
     * @param {string} link -takes the page link
     */
    const topRatedMovies =(link = `/movie/top_rated`)=> {

        mvRequest.get(link).then((response) =>{
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
        // eslint-disable-next-line
    },[])

    return (
        <div className={'top-rated'}>
           <h2 className={'tiny-elements-padding'}>Top Rated Movies</h2>
            <div className={'top-rated_tp-con grid-style'}>
                {
                    topRated.map((el) => (
                        <TopRatedCard
                            movie={el}
                            key={el.id}
                            emage={el.poster_path}
                        />
                    )).slice(-5)
                }
            </div>
        </div>
    );
};

export default TopRated;