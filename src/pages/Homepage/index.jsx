import React,{useState,useEffect} from 'react';
import './homepage.style.css';
import Axios from 'axios';
import Card from "../../elements/Card";

const HomePage = () => {
    const [movies,setMovies] = useState({})
    const [pagination, setPagination] = useState(1)
    let mainUrl = process.env.REACT_APP_API_BASE_LINK
    /**
     * @param {string} link -takes the page link
     */

    const requestMovies =(link = `https://api.themoviedb.org/3/movie/top_rated?api_key=${mainUrl}&language=en-US&page=${pagination}`)=> {
        console.log(link)
        Axios.get(link).then((response) =>{
            const {data,status} = response
            console.log(response)
            if(status === 200){
                setMovies(data.results)
            }
        }).catch((err) => {
            console.log(err)
        });
    }
  useEffect(() =>{
       requestMovies()
  },[])

    return (
        <div className={'homepage'}>
            <div className={'homepage_hp-c container'}>
                {
                    movies.map((el) => (
                        <Card movies={el}/>
                    ))
                }

            </div>

        </div>
    );
};

export default HomePage;